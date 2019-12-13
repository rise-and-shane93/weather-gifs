import React, { Component } from "react";
import PropTypes from "prop-types";
import { deleteOneWeather } from '../../redux/actions/weather';
import { connect } from "react-redux";

class UserSelectedData extends Component {

constructor(props) {
    super(props);
    this.iconClose = React.createRef();
    this.state = {
      hover: false
    }
}


toggleHover = () => {
	this.setState({hover: !this.state.hover})
}

handleDelete = () => {
  const { data, urlUserName, location } = this.props;
  this.props.deleteOneWeather(`/api/weather/${urlUserName}/${location}`, data);
  this.props.dataLimitFalse();
}

render() {
  const { tempValue } = this.props;
  let iconStyle;
   if (this.state.hover) {
     iconStyle = {display: 'flex'}
   } else {
     iconStyle = {display: 'none'}
   }
  let farStyle, celStyle;
   if (tempValue === "F") {
      farStyle = {display: "inline"};
      celStyle = {display: "none"};
   } else {
    farStyle = {display: "none"};
    celStyle = {display: "inline"};
   }
  const { location, desc, currTempF, maxTempF, minTempF, currTempC, maxTempC, minTempC, icon } = this.props.data;
    return (
      <div className="user-selected-child" id={`user-data-${this.props.index}`}
      onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        <div className="icon-close" style={iconStyle} onClick={this.handleDelete}>
          <span>&times;</span>
        </div>
        <h6 className="user-selected-title">{location}</h6>
        <p>
          <span style={farStyle}>{currTempF}&deg;F</span>
          <span style={celStyle}>{currTempC}&deg;C</span>
        </p>
        <p>{desc}</p>
        <img className="user-selected-weather-icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={desc}/>
        <p>
          <span style={farStyle}>H: {maxTempF}&deg;F / L: {minTempF}&deg;F</span>
          <span style={celStyle}>H: {maxTempC}&deg;C / L: {minTempC}&deg;C</span>
        </p>
      </div>
    );
  }
}

// SearchResults.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  weatherData: state.weather.weatherData,
  tempValue: state.weather.temperature
});

export default connect(mapStateToProps, {
  deleteOneWeather
})(UserSelectedData);