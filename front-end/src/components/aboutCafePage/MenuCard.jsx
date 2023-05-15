import React from "react";
import styles from "../css/MenuCard.module.css";

function MenuCard(props) {
  return (
    <div className={styles.menuCard}>
      <img src={props.image} alt="" className={styles.menuImg} />
      <div>
        <div className={styles.menuName}>{props.name}</div>
        <div className={styles.menuPrice}>{props.price}</div>
      </div>
    </div>
  );
}

export default MenuCard;
