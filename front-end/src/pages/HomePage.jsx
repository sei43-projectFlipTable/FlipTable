import React, { useState, useEffect } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import NavBar from "../components/NavBar";
import CardsDisplay from "../components/CardsDisplay";

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

  return (
    <>
      <PhoneTopBar />
      <CardsDisplay cafes={cafes} />
      <NavBar />
    </>
  );
}

export default HomePage;
