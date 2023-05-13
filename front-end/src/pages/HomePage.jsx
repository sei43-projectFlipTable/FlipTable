import React, { useState, useEffect } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import NavBar from "../components/NavBar";
import CardsDisplay from "../components/CardsDisplay";
import { fetchData } from "../helpers/common";

function HomePage() {
  const [cafes, setCafes] = useState([]);
  const getCafes = async () => {
    const { ok, data } = await fetchData("/api/cafes/");

    if (ok) {
      setCafes(data);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    getCafes();
  }, []);

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

  console.log(cafes);
  return (
    <>
      <PhoneTopBar />
      <CardsDisplay cafes={cafes} />
      <NavBar />
    </>
  );
}

export default HomePage;
