import React from "react";
import styles from "./css/Card.module.css";
import { Rating } from "@mui/material";

const Card = (props) => {
  return (
    <div className={styles.mainCard}>
      <img src={`${props.img}`} className={styles.cardImg} />
      <div className={styles.cardInfo}>
        {/* <div className={styles.infoFrame}> */}
        <div className={styles.cardTitle}>{props.name}</div>
        <div className={styles.cardCaption}>{props.address}</div>
        <div className={styles.cardRating}>
          <Rating
            name="half-rating-read"
            defaultValue={props.reviewRating}
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
