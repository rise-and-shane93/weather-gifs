import React from "react";

const Courtesy = () => {
    return (
        <div className="courtesy">
            <div className="courtesy-inner">
                <div>
                    <h5>Weather data powered by:</h5>
                    <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer"><img srcSet="https://openweathermap.org/themes/openweathermap/assets/img/openweather-negative-logo-RGB.png" alt="OpenWeather"/></a>
                </div>
                <div>
                    <h5>.gifs provided by:</h5>
                    <iframe title="intro gif" src="https://giphy.com/embed/YJBNjrvG5Ctmo" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/haydiroket-art-YJBNjrvG5Ctmo">via GIPHY</a></p>
                </div>
            </div>
            <h6>Created by <a href="https://www.shanecharper.com" target="_blank" rel="noopener noreferrer">Shane Harper</a></h6>
        </div>
    );
}

export default Courtesy;