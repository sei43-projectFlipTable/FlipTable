import React, { useState, useEffect } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import styles from "./css/AboutCafePage.module.css";
import { calculateRating, fetchData } from "../helpers/common";
import { useParams } from "react-router-dom";
import AboutCafe from "../components/aboutCafePage/AboutCafe";
import AboutCafeMenu from "../components/aboutCafePage/AboutCafeMenu";
import AboutCafeReview from "../components/aboutCafePage/AboutCafeReview";
import NavBar from "../components/NavBar";

// CafeId in params
function AboutCafePage() {
  const { cafeId } = useParams();
  // 0 - About, 1 - Menu, 2 - Reviews
  const [cafeData, setCafeData] = useState([]);
  const [page, setPage] = useState(0);
  const [rating, setRating] = useState(0);
  const aboutPages = [
    <AboutCafe cafeId={cafeId} cafeData={cafeData} rating={rating} />,
    <AboutCafeMenu cafeId={cafeId} />,
    <AboutCafeReview cafeId={cafeId} />,
  ];

  async function postCafe() {
    try {
      const { ok, data } = await fetchData("/api/cafes/" + cafeId, "POST");
      if (ok) {
        setCafeData(data);
        setRating(calculateRating(data.reviewRating));
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
      <img className={styles.cafeImage} src={cafeData.image} />
      <div className={styles.blocker} />
      <div className={styles.curvedTop}>
        <div className={styles.content}>
          <div className={styles.aboutNavBar}>
            <div
              className={`${styles.tab} ${page === 0 ? styles.activeTab : ""}`}
              onClick={() => setPage(0)}
            >
              About
            </div>
            <div
              className={`${styles.tab} ${page === 1 ? styles.activeTab : ""}`}
              onClick={() => setPage(1)}
            >
              Menu
            </div>
            <div
              className={`${styles.tab} ${page === 2 ? styles.activeTab : ""}`}
              onClick={() => setPage(2)}
            >
              Reviews
            </div>
          </div>
          {aboutPages[page]}
        </div>
      </div>
      <NavBar />
    </>
  );
}

export default AboutCafePage;
