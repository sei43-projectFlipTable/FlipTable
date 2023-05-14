import React, { useState, useEffect } from "react";
import styles from "../css/AboutCafeReview.module.css";
import styles2 from "../css/AboutCafe.module.css";
import ReviewCard from "./ReviewCard";
import TagDropDownFilter from "../TagDropDownFilter";

function AboutCafeReview(props) {
  const dbTags = [
    "wifi",
    "power",
    "aircon",
    "workspace",
    "lighting",
    "withmedia",
  ];
  const [selectedTag, setSelectedTag] = useState("");
  const [availableTags, setAvailableTags] = useState(dbTags);

  useEffect(() => {
    const tagArr = [];
    for (const review of props.cafeReviews) {
      if (!tagArr.includes("withmedia") && review.image != "") {
        // Check if at least one review has image.
        tagArr.push("withmedia");
      }
      for (const reviewTag of review.tags) {
        if (!tagArr.includes(reviewTag)) {
          // Check which tags are contained within reviews
          tagArr.push(reviewTag);
        }
      }
    }
    setAvailableTags(tagArr);
  }, [props.cafeReviews]);

  function selectReviews(reviewArr) {
    if (selectedTag != "") {
      return mapOutReviews(
        reviewArr.filter((item) => {
          return item.tags.includes(selectedTag);
        })
      );
    } else {
      return mapOutReviews(reviewArr);
    }
  }

  function mapOutReviews(reviewArr) {
    if (reviewArr.length > 0) {
      return reviewArr.map((item, idx) => {
        return (
          <div key={idx}>
            {idx != 0 && <hr />}
            <ReviewCard
              key={item._id}
              id={item._id}
              rating={item.rating}
              image={item.image}
            >
              {item.review}
            </ReviewCard>
          </div>
        );
      });
    } else {
      return "No reviews found";
    }
  }

  function handleChooseTag(event) {
    setSelectedTag(event.target.value);
  }

  return (
    <div>
      <h5 className={styles2.header}>Reviews</h5>
      <TagDropDownFilter
        selectedTag={selectedTag}
        handleChooseTag={handleChooseTag}
        availableTags={availableTags}
      />
      <div className={styles.reviewContainer}>
        {selectReviews(props.cafeReviews)}
      </div>
    </div>
  );
}

export default AboutCafeReview;
