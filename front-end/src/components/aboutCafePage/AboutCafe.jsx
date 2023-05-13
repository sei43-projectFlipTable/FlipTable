import React, { useState, useEffect } from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { Rating } from "@mui/material";
import styles from "../css/AboutCafe.module.css";
import { fetchData, handleNewline } from "../../helpers/common";

function AboutCafe(props) {
  const [rating, setRating] = useState(0);

  async function getRating() {
    try {
      const { ok, data } = await fetchData(
        "/api/cafes/rate/" + props.cafeId,
        "POST"
      );
      if (ok) {
        setRating(data);
      } else {
        throw new Error(data);
      }
    } catch (error) {
      console.error(error.message);
      alert("Error getting cafe rating");
    }
  }

  useEffect(() => {
    getRating();
  }, []);

  return (
    <div className={styles.container}>
      <h5>{props.cafeData.name}</h5>
      <div className={styles.address}>
        <PlaceOutlinedIcon /> {handleNewline(props.cafeData.address)}{" "}
        <OpenInNewOutlinedIcon />
      </div>
      <div className={styles.pricetime}>
        <div className={styles.pricerating}>
          <MonetizationOnOutlinedIcon />
          {"$".repeat(props.cafeData.priceRating)}
        </div>
        <div>
          <AccessTimeOutlinedIcon />
          {handleNewline(props.cafeData.openingHours)}
        </div>
      </div>
      <div className={styles.description}>{props.cafeData.description}</div>
      <hr />
      <h5>Remote-Working Rating</h5>
      <Rating
        name="remote-working-rating"
        value={Number(rating)}
        precision={0.5}
        sx={{ color: "#E88252", width: "125px", marginTop: "17px" }}
        readOnly
      />
    </div>
  );
}

export default AboutCafe;
