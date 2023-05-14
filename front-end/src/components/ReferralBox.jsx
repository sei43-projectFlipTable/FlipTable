import React from "react";
import styles from "./css/PointsAndCashValue.module.css";
import { Link } from "react-router-dom";

function ReferralBox() {
  return (
    <div>
      <div className={styles.homePageScroll}>
        {/* _____________________________________________________
    -------------referral components only---------------- */}
        <div className={styles.referralComponentSpace}>
          <div className={styles.referralHeaderSpace}>
            <div className={styles.referralHeaderTextSpace}>
              <div className={styles.referralHeaderText}>
                Refer a friend, get 500 points
              </div>
            </div>
            <div className={styles.referralGiftSpace}>
              <img
                src="/giftbox.png"
                alt="giftbox"
                className={styles.referralGiftIcon}
              />
            </div>
          </div>

          <div className={styles.referralBodySpace}>
            <div className={styles.referralBodyDescriptionSpace}>
              <div className={styles.referralBodyDescription}>
                Gift your friend 500 points and get the same when they join
                FlipTable!
              </div>
            </div>
            <Link to="/referral" style={{ textDecoration: "none" }}>
              <div className={styles.referralButtonSpace}>
                <div className={styles.referralButton}>Earn Now</div>
              </div>
            </Link>
          </div>
        </div>

        {/* -------------referral components only----------------
    _____________________________________________________ */}
      </div>
    </div>
  );
}

export default ReferralBox;
