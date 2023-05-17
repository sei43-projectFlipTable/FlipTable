import React, { useState, useContext, useEffect } from "react";
import { fetchData } from "../helpers/common";
import PhoneTopBar from "../components/PhoneTopBar";
import NavBar from "../components/NavBar";
import AppHeader from "../components/AppHeader";
import PointsAndCashValue from "../components/PointsAndCashValue";
import ReferralBox from "../components/ReferralBox";
import styles from "./css/ProfilePage.module.css";
import AboutMe from "../components/AboutMe";
import UserContext from "../context/user";
import LogoutButton from "../components/LogoutButton";

function ProfilePage() {
  const userCtx = useContext(UserContext);
  const [userBio, setUserBio] = useState();
  const getUserBio = async () => {
    try {
      const { ok, data } = await fetchData(
        "/user",
        userCtx.accessToken,
        "POST",
        {
          id: userCtx.payload.id,
        }
      );

      if (ok) {
        const splitEmail = data.email.split("@");
        setUserBio(splitEmail[0]);
      } else throw new Error(data);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    getUserBio();
  }, [userCtx.accessToken]);
  return (
    <>
      <PhoneTopBar />
      <AppHeader />

      <div className={styles.profileContainer}>
        <div className={styles.profilePicSpace}>
          <img className={styles.profilePic} src="/catProfilePic.png" />
          <div className={styles.username}>{userBio}</div>
        </div>
      </div>
      <div className={styles.emptyDiv}></div>
      <div className={styles.scrollable}>
        <div className={styles.pointsTrackerAdjustment}>
          <PointsAndCashValue />

          <ReferralBox />
          <AboutMe />
        </div>
      </div>
      <LogoutButton />
      <NavBar />
    </>
  );
}

export default ProfilePage;
