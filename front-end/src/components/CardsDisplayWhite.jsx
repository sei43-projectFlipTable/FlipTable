import React from "react";
import styles from "./css/CardsDisplayWhite.module.css";
import Card from "./Card";

function CardsDisplayWhite(props) {
  return (
    <div className={styles.display}>
      {props.cafeData.map((cafe) => {
        return (
          <Card
            key={cafe._id}
            image={cafe.image}
            name={cafe.name}
            address={cafe.address}
            reviewRating={cafe.reviewRating}
          />
        );
      })}
    </div>
  );
}

export default CardsDisplayWhite;
