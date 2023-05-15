import React from "react";
import styles from "./css/FilteredDisplay.module.css";
import FilteredCard from "./FilteredCard";

function FilteredDisplay(props) {
  return (
    <div className={styles.filterContainer}>
      {props.cafeData.map((item) => {
        return (
          <FilteredCard
            key={item._id}
            id={item._id}
            name={item.name}
            address={item.address}
            reviewRating={item.reviewRating}
          />
        );
      })}
    </div>
  );
}

export default FilteredDisplay;
