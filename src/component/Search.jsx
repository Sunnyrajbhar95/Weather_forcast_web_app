import React, { useState } from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";
 const Search = ({ setlocation, data }) => {
  const navigate = useNavigate();
  const [data1, setdata] = useState("");
  const eve = (e) => {
    setdata(e.target.value);
    
  };
  const click = () => {
    setlocation(data1);
    navigate('/')
    
    
  };
  return (
    <div className="box">
      <div className="form">
        <input type="text" id="text" onChange={eve} value={data1} className="input" />
        <button className="btn" onClick={click}>Search</button>
      </div>
     </div>
    
  );
};
export default Search;
