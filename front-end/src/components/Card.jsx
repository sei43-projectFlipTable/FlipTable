import React from "react";
import styles from "./css/Card.module.css";
import { Rating } from "@mui/material";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Card = (props) => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      fontSize: 19,
      color: "#264343",
    },
  });

  return (
    <Link to={`/about/${props.id}`} className={styles.cardLink}>
      <div className={styles.mainCard}>
        <img src={props.image} className={styles.cardImg} />
        <div className={styles.cardInfo}>
          <div className={styles.cardTitle}>{props.name}</div>
          <div className={styles.cardCaption}>{props.address}</div>
          <div className={styles.cardRating}>
            <StyledRating
              name="customized-color"
              defaultValue={
                props.reviewRating.ratingTotal /
                props.reviewRating.reviewCount /
                2
              }
              precision={0.5}
              icon={<StarRoundedIcon />}
              emptyIcon={<StarOutlineRoundedIcon />}
              readOnly
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
