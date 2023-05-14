import React from "react";
import { Rating } from "@mui/material";
import styles from "../css/ReviewCard.module.css";

function ReviewCard(props) {
  const ratingGrades = [
    "Not good",
    "Very Poor",
    "Poor",
    "Good",
    "Great",
    "Excellent",
  ];
  return (
    <div>
      <div>
        <div className={styles.ratingRow}>
          <h6 className={styles.ratingHeader}>
            {ratingGrades[Math.round(props.rating / 2)]}
          </h6>
          <Rating
            name="review-rating"
            value={props.rating / 2}
            precision={0.5}
            sx={{ color: "#264343", width: "106px" }}
            size="small"
            readOnly
          />
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default ReviewCard;
