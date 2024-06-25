import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flag from "../asset/flag.jpg"
import Wind from "../asset/Wind.jpg"
import hum from "../asset/hum.jpg"
import cloud from "../asset/cloud.jpg"

const Homepage = ({ data }) => {
  console.log(data.location.name);
  return (
    <div className="box">
      <div className="detail">
        <div className="location">
          <p>{data.location.name}</p>
           <img src={flag} alt="" width={30} height={15}/>
        </div>
        <div className="location">
          {data.current.condition.text}
          <FontAwesomeIcon icon="fa-solid fa-cloud" />
        </div>
        <div className="location"> Logo</div>
        <div className="temp">{data.current.temp_c}<span>&#8451;</span></div>
      </div>
      <div className="condition">
        <div className="box1">
        <img src={Wind} alt="" width={50} height={30}/>
          <div>Windspeed</div>
          <div>{data.current.wind_mph}m/h</div>
        </div>
        <div className="box1">
         <img src={hum} alt="" width={50} height={40}/>
          <div>HUMIDITY</div>
          <div>{data.current.humidity}%</div>
        </div>
        <div className="box1">
        <img src={cloud} alt="" width={50} height={40}/>
          <div>CLOUD</div>
          <div>{data.current.cloud}%</div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
