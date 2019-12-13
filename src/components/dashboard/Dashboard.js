import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import { handleAddToUserData, getWeather, changeTemp } from "../../redux/actions/weather";

import SearchResults from './SearchResults';
import UserSelectedData from './UserSelectedData';
import UserSelectedCity from './UserSelectedCity';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.renderedWeatherData = React.createRef();
    this.selectedCityData = React.createRef();

    //local state will only be used for when a user is adding a city.
    this.state = {
      duplicateSearch: false,
      dataLimit: false,
      selectCity: {},
      // weatherData: {
        // lat: undefined,
        // lng: undefined,
        // location: undefined,
        // desc: undefined,
        // currTemp: undefined,
        // minTemp: undefined,
        // maxTemp: undefined,
        // humidity: undefined,
        // windSpeed: undefined,
        // windDir: undefined,
        // windGust: undefined
      // }
    };
  }

  componentDidUpdate() {
    this.renderWeatherData(this.state.weatherData);
  }

  componentDidMount() {
    console.log(this.props.tempValue);
    const url = window.location.pathname.split('/');
    const urlUserName = url[url.length-1];
    this.setState({
      urlUserName,
      ...this.state
    }, () => {
      this.props.getWeather(`/api/weather/${urlUserName}`);
    });
  }

  viewCity = e => {
    if(e.target.textContent !== "×") {
      const userSelectedCity = e.target.closest(".user-selected-child").querySelector("h6").textContent;
      const cityObject = this.props.storedWeatherData.filter((el, i) => el.location === userSelectedCity);
      this.setState({selectCity: cityObject[0]});
      this.selectedCityData.current.style.display = "flex";  
    }
  }

  dataLimitFalse = () => {
    this.setState({dataLimit: false});
  }

  handleTemp = (e) => {
    let type = e.target.value;
    this.props.changeTemp(`/api/weather/${this.state.urlUserName}/${type}`);
    window.location.reload();
  }

  selectCity = e => {
    e.preventDefault();
    if (this.props.storedWeatherData.length === 5) {
      this.setState({dataLimit: true});
    }
    let query = encodeURIComponent(e.target.search.value);
    let weatherData = {
      lat: "",
      lng: "",
      location: "",
      desc: "",
      currTempF: "",
      minTempF: "",
      maxTempF: "",
      currTempC: "",
      minTempC: "",
      maxTempC: "",
      humidity: "",
      windSpeedM: "",
      windSpeedK: "",
      windDirDeg: "",
      index: "",
      icon: ""
      // windGust: ""
    };
    weatherData.location = e.target.search.value.split(',')[0];
    this.props.storedWeatherData.forEach((el,i) => {
      if (weatherData.location === el.location) {
        this.setState({duplicateSearch: true});
      }
    });
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?&address=${query}&key=`)
      .then(res => res.json())
      .then(res => {
        weatherData.lat = res.results[0].geometry.bounds.northeast.lat;
        weatherData.lng = res.results[0].geometry.bounds.northeast.lng;
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${weatherData.lat}&lon=${weatherData.lng}&appid=&units=imperial`)
      })
      .then(res => res.json())
      .then(res => {
        const { weather, main, wind } = res;
        // weatherData.location = res.name;
        weatherData.desc = weather[0].main;
        weatherData.currTempF = Math.round(main.temp);
        weatherData.minTempF = Math.round(main.temp_min);
        weatherData.maxTempF = Math.round(main.temp_max);
        weatherData.currTempC = Math.round((weatherData.currTempF - 32) / 1.8);
        weatherData.minTempC = Math.round((weatherData.minTempF - 32) / 1.8);
        weatherData.maxTempC = Math.round((weatherData.maxTempF - 32) / 1.8);
        weatherData.humidity = Math.round(main.humidity);
        weatherData.windSpeedM = Math.round(wind.speed);
        weatherData.windSpeedK = Math.round(wind.speed * 1.609344);
        weatherData.windDir = Math.round(wind.deg);
        weatherData.index = this.props.storedWeatherData.length;
        weatherData.icon = weather[0].icon;
        // weatherData.windGust = Math.round(wind.gust);
      })
      .then(() => {
        this.setState({
          ...this.state,
          weatherData: {
            ...weatherData
          }
        });
      })
      // .then(()=> {
      //   this.renderedWeatherData.current.innerHTML = <SearchResults weatherData={this.state.weatherData}/>;
      // })
      .then(() => {
        this.renderedWeatherData.current.style.display = "flex";
      })
      .catch(err => console.log(`Something wrong happened: ${err}`))
      .finally(console.log('weather search finished'));
      e.target.search.value = "";
  }

  renderWeatherData = data => {
    return <SearchResults weatherData={data}/>
  }

  handleDelete = (type) => {
    if (type === "search") {
      this.setState({
        weatherData: undefined
      });
      if (this.state.duplicateSearch) {
        this.setState({duplicateSearch: false});
      }
      this.renderedWeatherData.current.style.display="none";  
    } else if (type === "select") {
      this.setState({selectCity: {}});
      this.selectedCityData.current.style.display="none";  
    }
  }

  addToDB = () => {
    console.log('add to db');
    const { urlUserName, weatherData } = this.state;
    this.props.handleAddToUserData(`/api/weather/${urlUserName}`, weatherData);
    this.handleDelete("search");
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {
    const { user } = this.props.auth;
    const { storedWeatherData, tempValue } = this.props;
    const { urlUserName } = this.state;
    return (
      <div className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Welcome to Weather in .GIFS! Find your city to get started.<br/>
                Then, click on a city you selected to view the .gif!
              </p>
            </h4>
            <form onSubmit={this.selectCity}>
              <label htmlFor="search">Search by city:</label>
              <div className="flexRow">
                <input type="text" name="search" placeholder="Ex: Atlanta, GA"/>
                <button onClick={this.locateCity} className="btn waves-effect waves-light hoverable blue accent-3">
                  Search!
                </button>
              </div>
            </form>
            <div className="selectedCityData" ref={this.selectedCityData} style={{'display': 'none'}}>
              {Object.keys(this.state.selectCity).length === 0 ? false : <UserSelectedCity data={this.state.selectCity} handleDelete={this.handleDelete}/>}
              {/* {this.state.selectCity ? <UserSelectedCity data={this.state.selectCity}/> : false} */}
            </div>
            <div className="renderedWeatherData" ref={this.renderedWeatherData} style={{'display': 'none'}}>
              {!!this.state.weatherData ? <SearchResults 
              weatherData={this.state.weatherData} 
              handleDelete={this.handleDelete}
              addToDB={this.addToDB}
              dataLength={this.props.storedWeatherData}
              duplicateSearch={this.state.duplicateSearch}
              dataLimit={this.state.dataLimit}/> : false}
            </div>
            <div className="user-selcted-weather" onClick={this.viewCity}>
              {storedWeatherData.map((el, i) => {
                return <UserSelectedData 
                          key={i} 
                          data={el} 
                          urlUserName={urlUserName} 
                          index={el.index} 
                          location={el.location}
                          icon={el.icon}
                          dataLimitFalse={this.dataLimitFalse}/>
              })}
            </div>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
            <div>
            <label className="selectLabel" htmlFor="selectTemp">C&deg; / F&deg;</label>
            <select name="selectTemp" value={tempValue} onChange={this.handleTemp}>
              <option value="F">F&deg;</option>
              <option value="C">C&deg;</option>
            </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  storedWeatherData: state.weather.weatherData,
  tempValue: state.weather.temperature
});

export default connect(
  mapStateToProps,
  { 
    logoutUser,
    handleAddToUserData,
    getWeather,
    changeTemp
  }
)(Dashboard);