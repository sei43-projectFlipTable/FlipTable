import React from "react";
import styles from "./css/CafeTag.module.css";

function CafeTag(props) {
  const amenities = {
    wifi: "Wi-Fi",
    power: "Power Socket",
    aircon: "Air Conditioning",
    workspace: "Dedicated Workspace",
    lighting: "Good Lighting",
  };
  return <div className={styles.cafetag}>{amenities[props.children]}</div>;
}

export default CafeTag;
