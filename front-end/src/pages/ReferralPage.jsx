import React from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import AppHeader from "../components/AppHeader";
import NavBar from "../components/NavBar";
import styles from "./css/ReferralPage.module.css";

function ReferralPage() {
  return (
    <>
      <PhoneTopBar />
      <AppHeader />
      <div className={styles.referralHeaderFrame}>
        <div className={styles.referralHeader}>Refer and Earn</div>
      </div>
      <div className={styles.greyFrame}>
        <div className={styles.referFrame}>
          <div className={styles.referHeaderFrame}>
            <div className={styles.referHeader}>
              Refer a friend, get 500 points
            </div>
          </div>
          <div className={styles.referralCodeFrame}>
            <div className={styles.referralCode}>FT313301N1</div>
            <div className={styles.referralCodeCopyBtn}>Copy</div>
          </div>
          <div className={styles.actionBtnsFrame}>
            <button className={styles.share}>Share</button>
            <button className={styles.invite}>Invite from Contact</button>
          </div>
          <div className={styles.referralHistory}>
            <div className={styles.referralHistoryHeader}>Referral History</div>
            <div className={styles.referralStatsFrame}>
              <div className={styles.referralCodesUsed}>1</div>
              <div className={styles.referralPointsEarned}>500</div>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </>
  );
}

export default ReferralPage;
