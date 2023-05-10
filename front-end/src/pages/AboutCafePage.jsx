import React, { useState, useEffect } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import styles from "./css/AboutCafePage.module.css";
import { useLocation } from "react-router-dom";
import { fetchData } from "../helpers/common";

function AboutCafePage() {
  // Send ID from previous link over state or params?
  const cafeId = useLocation().state?.id;
  const [cafeData, setCafeData] = useState([]);

  async function postCafe() {
    try {
      const { ok, data } = fetchData("/api/cafes/" + cafeId, "POST");
      if (ok) {
        setCafeData(data);
      } else {
        throw new Error(data);
      }
    } catch (error) {
      console.error(error.message);
      alert("Error getting cafe info");
    }
  }

  useEffect(() => {
    postCafe();
  }, []);

  return (
    <>
      <PhoneTopBar />
      <div></div>
    </>
  );
}

export default AboutCafePage;
