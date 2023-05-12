import React from "react";
import styles from "./css/CardsDisplay.module.css";
import Card from "./Card";

function CardsDisplay() {
  return (
    <div className={styles.display}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardsDisplay;
