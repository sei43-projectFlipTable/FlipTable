import React from "react";
import styles from "./css/CafeTag.module.css";
import { amenities } from "../helpers/amenities";

function CafeTag(props) {
  return <div className={styles.cafetag}>{amenities[props.children]}</div>;
}

export default CafeTag;
