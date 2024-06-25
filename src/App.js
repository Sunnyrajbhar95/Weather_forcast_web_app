import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./component/Homepage";
import Search from "./component/Search";
import Navigate from "./component/Navigate";
import { useEffect, useState } from "react";
import Spiner from "./component/Spiner";

function App() {
  const [data, setdata] = useState({});
  const [location, setlocation] = useState("Patna");
  const [loader, setloader] = useState(true);
  const [res,setres]=useState(200);

  const getapi = async (location) => {
    try {
      setloader(true);
      const respose = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=d6d2ecc5318a43ff99e22449240403&q=${location}&aqi=no`
      );

      const d = await respose.json();

      setdata(d);
      setres(respose.status);

      setloader(false);
    } catch (error) {
      console.log(Error);
    }
  };
  useEffect(() => {
    getapi(location);
  }, [location]);
  console.log(data);
  console.log(res);
  return (
    <div className="container">
      <div className="heading"> WEATHER APP</div>
      <div className="wrapper">
        <div className="navbar">
          <Navigate />
        </div>
        <div className="page">
          {loader ? (
            <Spiner />
          ) : res===200?<div className="page">
          <Routes>
            <Route path="/" element={<Homepage data={data} />} />
            <Route
              path="/search"
              element={<Search setlocation={setlocation} data={data} />}
            />
          </Routes>
        </div>:<div>Location is not found</div>
        }
        </div>
      </div>
    </div>
  );
}

export default App;
