import React from "react";
import styles from "./css/PointsAndCashValue.module.css";

const PointsAndCashValue = () => {
  return (
    <>
      <div className={styles.fliptable}>FlipTable</div>
      <div className={styles.pointsTracker}>
        <div className={styles.pointsBox}>
          <div className={styles.points}>Points</div>
          <div className={styles.pointsDisplay}>100 </div>
        </div>
        <div className={styles.equalBox}>
          <div className={styles.equal}>=</div>
        </div>
        <div className={styles.cashBox}>
          <div className={styles.cash}>Cash Value</div>
          <div className={styles.cashDisplay}>$1.00 </div>
        </div>
      </div>

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
              <div className={styles.referralGiftIcon}>
                <img src="/giftbox.png" alt="giftbox" />
              </div>
            </div>
          </div>

          <div className={styles.referralBodySpace}>
            <div className={styles.referralBodyDescriptionSpace}>
              <div className={styles.referralBodyDescription}>
                Gift your friend 500 points and get the same when they join
                FlipTable!
              </div>
            </div>
            <div className={styles.referralButtonSpace}>
              <div className={styles.referralButton}>Earn Now</div>
            </div>
          </div>
        </div>

        {/* -------------referral components only----------------
        _____________________________________________________ */}
      </div>
    </>
  );
};

export default PointsAndCashValue;
