import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/style.module.css";
import morningCloudImage from "../img/morning_cloud.jpg";
export function Home() {
  const navigate = useNavigate();
  const [city, setCity] = useState("Baku");
  const [locatTime,setLocalTime]= useState()
  const [result, setResult] = useState(null);
  const handleNavigate = () => {
    navigate("/about");
  };
  const dataArray = [{name:"Nurlan",surname:"Nuruzada",age:"18",Hobbies:"Gaming,Coding"}]
  const handleSearchChange = (e) => {
    setCity(e.target.value);
  };
  const HandleButtonSearch = (value) => {
    console.log(value)
    setCity(value.value);
    search();
  };

  useEffect(() => {
    search();
  }, []);
  const search = async()  => {
    await fetch(
      `https://api.weatherapi.com/v1/current.json?key=59815d79931e474393c103846231805&q=${city}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
        setLocalTime(data?.location?.localtime.slice(10))
      })
  };
  return (
    <div>
     : (
        <div style={{ backgroundImage: `url(${morningCloudImage})`}}  className={styles.main}>
          <div className={styles.main__content}>
            <div className={styles.left}>
              <p className={styles.title__main}>the weather</p>
              <div className={styles.grid__container}>
                {locatTime ? ( <>          <span className={styles.city}>{result?.location?.name}</span>
                <img  className={styles.Icon} src={result?.current?.condition?.icon}/>
                <span className={styles.timeAndHum}> <span className={styles.time}>{locatTime}</span> - humidity -{result?.current?.humidity}%</span>
                <span className={styles.item1}>{result?.current?.temp_c}°C</span>
                <span className={styles.condition}>{result?.current?.condition?.text}</span></>) : (<span className={styles.timeAndHum}>Not found!</span>)}
       
              </div>
            </div>
            <div className={styles.right}>
              <input
                onChange={handleSearchChange}
                placeholder="Search Location ..."
                id={styles.searchArea}
                type="text"
              />
              <button onClick={search} id={styles.SeachButton}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <ul id={styles.list_country}>
                <li onClick={handleNavigate}  className={styles.city}  >Go to about</li>
                <li onClick={HandleButtonSearch} value={"Baku"} className={styles.city}>Baku</li>
                <li onClick={HandleButtonSearch} value={"Tovuz"} className={styles.city}>Tovuz</li>
                <li onClick={HandleButtonSearch} value={"Istanbul"} className={styles.city}>Istanbul</li>
              </ul>
              <div className={styles.weather_container}>
              {locatTime ? (
                  <>
                  <span className={styles.time}>Local time :{locatTime}</span>
                    <span className={styles.timeAndHum}>
                    humidity : {result?.current?.humidity}%
                    </span>
                    <span className={styles.item1}> Current Temperature  :{result?.current?.temp_c}°C</span>
                    <span className={styles.condition}>Condition  :{result?.current?.condition?.text}</span>
                  </>
                ) : (
                  <span>Not found!</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    </div>
  );
}
