import React from "react";
import styles from "./css/FilteredCard.module.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Rating } from "@mui/material";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

function FilteredCard(props) {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#264343",
    },
  });
  return (
    <div className={styles.cardContainer}>
      <img src={props.image} className={styles.cardImage} />
      <div className={styles.detailsContainer}>
        <div className={styles.cardName}>{props.name}</div>
        <div className={styles.cardAddress}>{props.address}</div>
        <div className={styles.cardRating}>
          <StyledRating
            name="customized-color"
            defaultValue={
              props.reviewRating.ratingTotal /
              props.reviewRating.reviewCount /
              2
            }
            precision={0.5}
            icon={<StarRoundedIcon sx={{ fontSize: 20 }} />}
            emptyIcon={<StarOutlineRoundedIcon sx={{ fontSize: 20 }} />}
            readOnly
          />
        </div>
      </div>
      <Link to={`/about/${props.id}`}>
        <div className={styles.arrowForward}>
          <ArrowForwardIosOutlinedIcon />
        </div>
      </Link>
    </div>
  );
}

export default FilteredCard;
