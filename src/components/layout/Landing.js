import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifArr: undefined
    }
  }

  getGif = (searchTerm) => {
    let arr = [];
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=NK7bgE246YG7l7Rp55mggieuBzvJZ035&q=${searchTerm}&limit=25&offset=0&rating=G&lang=en`)
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
    this.getGif('weather');
  }

  render() {
    return (
      <div className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <img className="introGif" srcSet={this.state.gifArr} alt="weatherGif" />
            <h4>View the weather in your favorite cities with a funny .gif!</h4>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;