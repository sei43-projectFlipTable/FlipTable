import React from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import WifiIcon from "@mui/icons-material/Wifi";
import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";
import DeskIcon from "@mui/icons-material/Desk";
import WbIridescentOutlinedIcon from "@mui/icons-material/WbIridescentOutlined";
import { Rating } from "@mui/material";
import styles from "../css/AboutCafe.module.css";
import { handleNewline } from "../../helpers/common";
import { amenities } from "../../helpers/amenities";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { styled } from "@mui/material/styles";

function AboutCafe(props) {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#E88252",
    },
  });
  const amenitiesComponents = {
    wifi: (
      <div className={styles.tagset} key="amenity1">
        <WifiIcon sx={{ color: "#264343" }} />
        <div>{amenities["wifi"]}</div>
      </div>
    ),
    power: (
      <div className={styles.tagset} key="amenity2">
        <PowerOutlinedIcon sx={{ color: "#264343" }} />
        <div>{amenities["power"]}</div>
      </div>
    ),
    aircon: (
      <div className={styles.tagset} key="amenity3">
        <img className={styles.aircon} src="/custom_icons/airconicon.png" />
        <div>{amenities["aircon"]}</div>
      </div>
    ),
    workspace: (
      <div className={styles.tagset} key="amenity4">
        <DeskIcon sx={{ color: "#264343" }} />
        <div>{amenities["workspace"]}</div>
      </div>
    ),
    lighting: (
      <div className={styles.tagset} key="amenity5">
        <WbIridescentOutlinedIcon sx={{ color: "#264343" }} />
        <div>{amenities["lighting"]}</div>
      </div>
    ),
  };

  function generate2tags(strArr) {
    if (!strArr || strArr.length === 0) {
      return;
    }
    const tagArr = [];
    const first2tags = strArr.slice(0, 2);
    for (const tag of first2tags) {
      tagArr.push(amenitiesComponents[tag]);
    }
    return tagArr;
  }

  return (
    <div className={styles.container}>
      <h5 className={styles.header}>{props.cafeData.name}</h5>
      <div className={styles.infoGridTop}>
        <div>
          <PlaceOutlinedIcon sx={{ color: "#E88252" }} />
        </div>
        <div>{handleNewline(props.cafeData.address)}</div>
        {props.cafeData.coordinates && (
          <a
            href={`https://maps.google.com?q=${props.cafeData.coordinates[0]},${props.cafeData.coordinates[1]}`}
            target="_blank"
            className={styles.gmaplink}
          >
            <OpenInNewOutlinedIcon />
          </a>
        )}
      </div>

      <div className={styles.infoGridBot}>
        <div>
          <MonetizationOnOutlinedIcon sx={{ color: "#E88252" }} />
        </div>
        <div>{"$".repeat(props.cafeData.priceRating)}</div>
        <div />
        <div>
          <AccessTimeOutlinedIcon sx={{ color: "#E88252" }} />
        </div>
        <div>{handleNewline(props.cafeData.openingHours)}</div>
      </div>
      <div className={styles.description}>{props.cafeData.description}</div>
      <hr />
      <h5 className={styles.ratingHeader}>Remote-Working Rating</h5>
      {/* <Rating
        name="remote-working-rating"
        value={props.rating}
        precision={0.5}
        sx={{ color: "#E88252", width: "125px", marginTop: "17px" }}
        readOnly
      /> */}
      <StyledRating
        name="remote-working-rating"
        defaultValue={props.rating}
        precision={0.5}
        sx={{ width: "145px" }}
        icon={<StarRoundedIcon sx={{ fontSize: 40 }} />}
        emptyIcon={<StarOutlineRoundedIcon sx={{ fontSize: 40 }} />}
        readOnly
      />
      <div className={styles.primaryTags}>
        {generate2tags(props.cafeData.tags)}
      </div>
    </div>
  );
}

export default AboutCafe;
