import React from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import NavBar from "../components/NavBar";
import AppHeader from "../components/AppHeader";
import PointsAndCashValue from "../components/PointsAndCashValue";
import ReferralBox from "../components/ReferralBox";
import styles from "./css/ProfilePage.module.css";
import AboutMe from "../components/AboutMe";

function ProfilePage() {
  return (
    <>
      <PhoneTopBar />
      <AppHeader />
      <div className={styles.profilePicSpace}>
        <img className={styles.profilePic} src="/catProfilePic.png" />
        <div className={styles.username}>Waifu Lover</div>
      </div>
      <div className={styles.emptyDiv}></div>
      <div className={styles.scrollable}>
        <div className={styles.pointsTrackerAdjustment}>
          <PointsAndCashValue />

          <ReferralBox />
          <AboutMe />
        </div>
      </div>

      <NavBar />
    </>
  );
}

export default ProfilePage;
