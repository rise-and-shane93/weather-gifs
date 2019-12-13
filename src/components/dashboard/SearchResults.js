import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class SearchResults extends Component {

constructor(props) {
    super(props);

    this.state = {
      gifArr: undefined
    }
}

getGif = (searchTerm) => {
  let arr = [];
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=&q=${searchTerm}&limit=50&offset=0&rating=G&lang=en`)
    .then(res => res.json())
    .then(res => {
      console.log(res.data);
      res.data.forEach((el, i) => {
        arr.push(el.images.original.url);
      })
    })
    .then(res => {
      this.setState({gifArr: arr[Math.floor(Math.random() * arr.length)]});
    })
    .catch(err => console.log(err))
    .finally(console.log("gif search finished"))
}

componentDidMount() {
  console.log(this.props.weatherData.desc);
  this.getGif(this.props.weatherData.desc);
}

degtoDir = deg => {
  if (deg <= 10 && deg >= 355) {
    return "N";
  } else if (deg > 10 && deg <= 30) {
    return "NNE";
  } else if (deg > 30 && deg <= 60) {
    return "NE";
  } else if (deg > 60 && deg < 80) {
    return "ENE";
  } else if (deg >= 80 && deg <= 100) {
    return "E";
  } else if (deg > 100 && deg <= 120) {
    return "ESE";
  } else if (deg > 120 && deg <= 140) {
    return "SE";
  } else if (deg > 140 && deg <= 160) {
    return "SSE";
  } else if (deg > 160 && deg <= 190) {
    return "S";
  } else if (deg > 190 && deg <= 210) {
    return "SSW";
  } else if (deg > 210 && deg <= 230) {
    return "SW";
  } else if (deg > 230 && deg <= 250) {
    return "WSW";
  } else if (deg > 250 && deg <= 280) {
    return "W";
  } else if (deg > 280 && deg <= 300) {
    return "WNW";
  } else if (deg > 300 && deg <= 320) {
    return "NW";
  } else if (deg > 320 && deg <= 355) {
    return "NNW";
  }
}

// location: undefined,
// desc: undefined,
// currTemp: undefined,
// minTemp: undefined,
// maxTemp: undefined,
// humidity: undefined,
// windSpeed: undefined,
// windDir: undefined,
// windGust: undefined

render() {
  // const { weatherData } = this.props;
  const { location, desc, currTempF, maxTempF, minTempF, currTempC, maxTempC, minTempC,
          humidity, windDir, windSpeedM, windSpeedK, index } = this.props.weatherData;
  const { handleDelete, addToDB, duplicateSearch, dataLimit, tempValue } = this.props;
  let direction = this.degtoDir(windDir);
  let farStyle, celStyle, mileStyle, kiloStyle;
  if (tempValue === "F") {
    farStyle = {display: "inline"};
    mileStyle = {display: "inline"};
    celStyle = {display: "none"};
    kiloStyle = {display: "none"};
 } else {
   farStyle = {display: "none"};
   mileStyle = {display: "none"};
   celStyle = {display: "inline"};
   kiloStyle = {display: "inline"};
 }
   return (
      <div id={`user-data-${index}`}>
        {(() => {
          if (duplicateSearch) {
            return <div>
              <p>You have already selected this city.<br/>Please search again.</p>
            <button onClick={() => handleDelete("search")}>Dismiss</button></div>
          } else if (dataLimit) {
            return <div>
              <p>You have reached the limit of cities to save weather data.</p>
              <p>Please delete one or more city entry and try again.</p>
            <button onClick={() => handleDelete("search")}>Dismiss</button></div>
          } else {
            return <div>
                    <h2 className="selected-location">{location}</h2>
                    <button id="deleteSelection" onClick={() => handleDelete("search")}
                    className="btn waves-effect waves-light hoverable blue accent-3">
                      Delete
                    </button>
                    <button id="addCity" onClick={addToDB}
                    className="btn waves-effect waves-light hoverable blue accent-3">
                      Add!
                    </button>
                    {/* <img/> */}
                    <p className="selected-desc">{desc}</p>
                    <img className="selected-gif" srcSet={this.state.gifArr} alt="weather gif"/>
                    <div className="additionalData">
                      <p className="selected-humidity">Humidity:<br/>{humidity}%</p>
                      <p className="selected-currTemp">Currently:<br/>
                        <span style={farStyle}>{currTempF}&deg;F</span>
                        <span style={celStyle}>{currTempC}&deg;C</span>
                      </p>
                      <p className="selected-maxMinTemp">
                        <span style={farStyle}>High / Low: <br/>{maxTempF}&deg;F / {minTempF}&deg;F</span>
                        <span style={celStyle}>High / Low: <br/>{maxTempC}&deg;C / {minTempC}&deg;C</span>
                      </p>
                      <p className="selected-wind">Direction: {direction}<br/> Speed: 
                        <span style={mileStyle}>{windSpeedM}mph</span>
                        <span style={kiloStyle}>{windSpeedK}kph</span>
                      </p>
                    </div>
                </div>
          }
        })()}
        
      </div>
    );
  }
}

// SearchResults.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  tempValue: state.weather.temperature
})

export default connect(mapStateToProps)(SearchResults);