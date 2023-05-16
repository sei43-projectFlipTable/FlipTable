import React, { useState, useContext, useEffect } from "react";
import styles from "./css/PointsAndCashValue.module.css";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";

const PointsAndCashValue = () => {
  const userCtx = useContext(UserContext);
  const [userData, setUserData] = useState([]);

  const getUserData = async (req, res) => {
    const { ok, data } = await fetchData(
      "/user/",
      userCtx.accessToken,
      "POST",
      {
        id: userCtx.payload.id,
      }
    );

    if (ok) {
      setUserData(data);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    getUserData();
  });

  return (
    <>
      <div className={styles.pointsTracker}>
        <div className={styles.pointsBox}>
          <div className={styles.points}>Points</div>
          <div className={styles.pointsDisplay}>{userData.points} </div>
        </div>
        <div className={styles.equalBox}>
          <div className={styles.equal}>=</div>
        </div>
        <div className={styles.cashBox}>
          <div className={styles.cash}>Cash Value</div>
          <div className={styles.cashDisplay}>{`$${(
            userData.points / 100
          ).toFixed(2)}`}</div>
        </div>
      </div>
    </>
  );
};

export default PointsAndCashValue;
