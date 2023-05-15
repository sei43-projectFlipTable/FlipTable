import React, { useState, useEffect } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import NavBar from "../components/NavBar";
import PointsAndCashValue from "../components/PointsAndCashValue";
import CardsDisplay from "../components/CardsDisplay";
import { fetchData } from "../helpers/common";
import AppHeader from "../components/AppHeader";
import styles from "./css/HomePage.module.css";
import ReferralBox from "../components/ReferralBox";

function HomePage() {
  const [cafes, setCafes] = useState([]);
  const [coords, setCoords] = useState([
    1.3240558643021323, 103.64688938000863,
  ]); //default to west of Singaore

  //get user location and set it to coords

  //calculating distance between coordinates
  const earthRadius = 6371;
  const convertRadian = (deg) => deg * (Math.PI / 180);
  const haversine = (lat1, lat2, lon1, lon2) => {
    const deltaLat = convertRadian(lat2 - lat1);
    const deltaLon = convertRadian(lon2 - lon1);
    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(convertRadian(lat1)) *
        Math.cos(convertRadian(lat2)) *
        Math.sin(deltaLon / 2) *
        Math.sin(deltaLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = earthRadius * c;
    const convertedD = Math.round(d * 100000) / 100; //meters
    return convertedD;
  };

  const getCafes = async () => {
    console.log("getting");
    const { ok, data } = await fetchData("/api/cafes/");
    //sort before setting data
    if (ok) {
      data.sort((a, b) => {
        return (
          haversine(coords[0], a.coordinates[0], coords[1], a.coordinates[1]) -
          haversine(coords[0], b.coordinates[0], coords[1], b.coordinates[1])
        );
      });
      setCafes(data);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((info) => {
      let lat = info.coords.latitude;
      let long = info.coords.longitude;
      setCoords([lat, long]);
    });
  }, []);

  useEffect(() => {
    getCafes();
  }, [coords]);

  return (
    <>
      <PhoneTopBar />
      <AppHeader />
      <PointsAndCashValue />
      <div className={styles.emptyDiv}></div>
      <div className={styles.scrollable}>
        <ReferralBox />
        <div className={styles.nearMeTitle}>Cafes Near Me</div>
        <CardsDisplay cafes={cafes} />
      </div>
      <NavBar />
    </>
  );
}

export default HomePage;
