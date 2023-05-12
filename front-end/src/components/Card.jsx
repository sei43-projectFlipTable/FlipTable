import React from "react";
import styles from "./css/Card.module.css";
import { Rating } from "@mui/material";

const Card = () => {
  return (
    <div className={styles.mainCard}>
      <img
        src="https://cdn.vox-cdn.com/thumbor/zXDwlBBFvXPzVvV4WRSUsigc4FY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24458108/captain_pikachu.jpg"
        className={styles.cardImg}
      />
      <div className={styles.cardInfo}>
        {/* <div className={styles.infoFrame}> */}
        <div className={styles.cardTitle}>Cafe name</div>
        <div className={styles.cardCaption}>Address here</div>
        <div className={styles.cardRating}>
          <Rating
            name="half-rating-read"
            defaultValue={3.5}
            precision={0.5}
            sx={{ color: "#264343", fontSize: 19 }}
            readOnly
          />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Card;
