import React from "react";
import styles from "./css/TagDropDownFilter.module.css";
import FilterListSharpIcon from "@mui/icons-material/FilterListSharp";
import { amenities } from "../helpers/amenities";

function TagDropDownFilter(props) {
  return (
    <div className={styles.tagContainer}>
      <select
        className={`${styles.tagSelector} ${props.dropdownWidth}`}
        name="tag-select"
        id="tag-select"
        value={props.selectedTag}
        onChange={(event) => {
          props.setSelectedTag(event.target.value);
        }}
      >
        <option key="0" value="">
          Search
        </option>
        {props.availableTags.length > 0 &&
          props.availableTags.map((item, idx) => {
            if (item === "withmedia") {
              return (
                <option key={idx + 1} value={item}>
                  {"Cafe with Media"}
                </option>
              );
            } else {
              return (
                <option key={idx + 1} value={item}>
                  {"Cafe with " + amenities[item]}
                </option>
              );
            }
          })}
      </select>
      <FilterListSharpIcon
        fontSize="small"
        sx={{
          color: "#979797",
          position: "absolute",
          top: "9px",
          right: props.filterIconRightPos,
        }}
      />
    </div>
  );
}

export default TagDropDownFilter;
