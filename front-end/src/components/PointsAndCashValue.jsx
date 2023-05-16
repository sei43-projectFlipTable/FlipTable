import React, { useContext, useEffect } from "react";
import styles from "./css/PointsAndCashValue.module.css";
import { fetchData } from "../helpers/common";

import UserContext from "../context/user";

const PointsAndCashValue = () => {
  const userCtx = useContext(UserContext);
  let userPoints;

  const getUserPoints = async () => {
    try {
      const { ok, data } = await fetchData("/user", userCtx.accessToken, "POST", {
        id: userCtx.payload.id,
      });

      if (ok) {
        console.log(data.points);
        userPoints = data.points;
      } else throw new Error(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getUserPoints();
  }, []);

  return (
    <>
      <div className={styles.pointsTracker}>
        <div className={styles.pointsBox}>
          <div className={styles.points}>Points</div>
          <div className={styles.pointsDisplay}>{userPoints} </div>
        </div>
        <div className={styles.equalBox}>
          <div className={styles.equal}>=</div>
        </div>
        <div className={styles.cashBox}>
          <div className={styles.cash}>Cash Value</div>
          <div className={styles.cashDisplay}>{`$${(userPoints / 100).toFixed(2)}`}</div>
        </div>
      </div>
    </>
  );
};

export default PointsAndCashValue;
