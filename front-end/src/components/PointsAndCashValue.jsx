import React, { useState, useEffect, useContext } from "react";
import styles from "./css/PointsAndCashValue.module.css";
import UserContext from "../context/user";

const PointsAndCashValue = () => {
  const userCtx = useContext(UserContext);
  // const [userData, setUserData] = useState([]);

  // const getPoints = async () => {
  //   const response = await fetch(`${apiUrl}/`);
  //   const data = await response.json();
  //   setUserData(data);
  // };

  // const getPoints = () => {
  //   const points = userCtx.payload;
  //   setUserData(points);
  // };

  // useEffect(() => {
  //   getPoints();
  return (
    <>
      <div className={styles.pointsTracker}>
        <div className={styles.pointsBox}>
          <div className={styles.points}>Points</div>
          <div className={styles.pointsDisplay}>{userCtx.payload.points} </div>
        </div>
        <div className={styles.equalBox}>
          <div className={styles.equal}>=</div>
        </div>
        <div className={styles.cashBox}>
          <div className={styles.cash}>Cash Value</div>
          <div className={styles.cashDisplay}>{`$${userCtx.payload.points / 100}`}</div>
        </div>
      </div>
    </>
  );
};

export default PointsAndCashValue;
