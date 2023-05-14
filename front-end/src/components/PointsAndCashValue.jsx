import React from "react";
import styles from "./css/PointsAndCashValue.module.css";

const PointsAndCashValue = () => {
  return (
    <>
      {/* <div className={styles.fliptable}>FlipTable</div> */}
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
    </>
  );
};

export default PointsAndCashValue;
