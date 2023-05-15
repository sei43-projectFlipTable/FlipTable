import React from "react";
import styles from "../css/AboutCafeMenu.module.css";
import styles2 from "../css/AboutCafe.module.css";
import MenuCard from "./MenuCard";

function AboutCafeMenu(props) {
  return (
    <div>
      <h5 className={styles2.header}>Menu</h5>
      <div className={styles.menuContainer}>
        {props.cafeMenu.map((item) => {
          return (
            <MenuCard
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AboutCafeMenu;
