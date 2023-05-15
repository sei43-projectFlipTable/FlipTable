import React from "react";
import { Rating } from "@mui/material";
import styles from "../css/ReviewCard.module.css";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { styled } from "@mui/material/styles";

function ReviewCard(props) {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#264343",
    },
  });
  const ratingGrades = [
    "Very Poor",
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
          <StyledRating
            name="customized-color"
            defaultValue={props.rating / 2}
            precision={0.5}
            icon={<StarRoundedIcon sx={{ fontSize: 20 }} />}
            emptyIcon={<StarOutlineRoundedIcon sx={{ fontSize: 20 }} />}
            readOnly
          />
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default ReviewCard;
