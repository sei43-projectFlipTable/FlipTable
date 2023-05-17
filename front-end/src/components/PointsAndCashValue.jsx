import React, { useContext, useEffect, useState } from "react";
import styles from "./css/PointsAndCashValue.module.css";
import { fetchData } from "../helpers/common";

import UserContext from "../context/user";

const PointsAndCashValue = () => {
  const userCtx = useContext(UserContext);
  const [userPoints, setUserPoints] = useState();

  const getUserPoints = async () => {
    try {
      const { ok, data } = await fetchData("/user", userCtx.accessToken, "POST", {
        id: userCtx.payload.id,
      });

      if (ok) {
        setUserPoints(data.points);
      } else throw new Error(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (userCtx.accessToken != "") {
      getUserPoints();
    }
  }, [userCtx.accessToken]);

  return (
    <>
      <div className={styles.pointsTracker}>
        <div className={styles.pointsBox}>
          <div className={styles.points}>Points</div>
          <div className={styles.pointsDisplay}>{userPoints}</div>
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
