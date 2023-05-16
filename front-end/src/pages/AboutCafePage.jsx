import React, { useState, useEffect, useContext } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import styles from "./css/AboutCafePage.module.css";
import { calculateRating, fetchData } from "../helpers/common";
import { useParams } from "react-router-dom";
import AboutCafe from "../components/aboutCafePage/AboutCafe";
import AboutCafeMenu from "../components/aboutCafePage/AboutCafeMenu";
import AboutCafeReview from "../components/aboutCafePage/AboutCafeReview";
import NavBar from "../components/NavBar";
import BackButton from "../components/BackButton";
import UserContext from "../context/user";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// CafeId in params
function AboutCafePage() {
  const userCtx = useContext(UserContext);
  const { cafeId } = useParams();
  // 0 - About, 1 - Menu, 2 - Reviews
  const [page, setPage] = useState(0);

  // UserData: id and Saved Places
  const [userData, setUserData] = useState({});
  const [cafeData, setCafeData] = useState({});
  const [cafeMenu, setCafeMenu] = useState([]);
  const [cafeReviews, setCafeReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [favourited, setFavourited] = useState(
    userCtx.payload.savedCafes?.includes(cafeId)
  );
  const aboutPages = [
    <AboutCafe cafeId={cafeId} cafeData={cafeData} rating={rating} />,
    <AboutCafeMenu cafeId={cafeId} cafeMenu={cafeMenu} />,
    <AboutCafeReview cafeId={cafeId} cafeReviews={cafeReviews} />,
  ];

  async function postUser() {
    try {
      const { ok, data } = await fetchData(
        "/user" + cafeId,
        userCtx.accessToken,
        "POST"
      );
      if (ok) {
        setUserData(data);
      } else {
        throw new Error(data);
      }
    } catch (error) {
      console.error(error.message);
      alert("Error getting user info");
    }
  }

  async function postCafe() {
    try {
      const { ok, data } = await fetchData(
        "/api/cafes/" + cafeId,
        userCtx.accessToken,
        "POST"
      );
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

  async function postMenu() {
    try {
      const { ok, data } = await fetchData(
        "/api/menu/" + cafeId,
        userCtx.accessToken,
        "POST"
      );
      if (ok) {
        setCafeMenu(data);
      } else {
        throw new Error(data);
      }
    } catch (error) {
      console.error(error.message);
      alert("Error getting cafe menu");
    }
  }

  async function postReviews() {
    try {
      const { ok, data } = await fetchData(
        "/api/review/" + cafeId,
        userCtx.accessToken,
        "POST"
      );
      if (ok) {
        setCafeReviews(data);
      } else {
        throw new Error(data);
      }
    } catch (error) {
      console.error(error.message);
      alert("Error getting cafe reviews");
    }
  }

  function handleFavourite() {
    setFavourited(true);
  }

  function handleUnfavourite() {
    setFavourited(false);
  }

  useEffect(() => {
    postUser();
    postCafe();
    postMenu();
    postReviews();
  }, []);

  return (
    <>
      <PhoneTopBar />
      <BackButton positionStyle={styles.backbuttonpos} />
      {favourited ? (
        <div className={styles.favouriteButton} onClick={handleUnfavourite}>
          <FavoriteIcon sx={{ color: "#1B4444" }} />
        </div>
      ) : (
        <>
          <div className={styles.favouriteButtonBg}>
            <FavoriteIcon sx={{ color: "#ffffff" }} />
          </div>
          <div className={styles.favouriteButton} onClick={handleFavourite}>
            <FavoriteBorderIcon sx={{ color: "#1B4444" }} />
          </div>
        </>
      )}
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
