import React, { useState, useEffect } from "react";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { Box, Modal } from "@mui/material";
import styles from "../css/AboutCafeReview.module.css";
import styles2 from "../css/AboutCafe.module.css";
import CafeTag from "../CafeTag";
import ReviewCard from "./ReviewCard";

function AboutCafeReview(props) {
  const dbTags = ["wifi", "power", "aircon", "workspace", "lighting"];
  const [showModal, setShowModal] = useState(false);
  const [availableTags, setAvailableTags] = useState(dbTags);
  const [filteredTags, setFilteredtags] = useState([]);

  useEffect(() => {
    const tagArr = [];
    for (const review of props.cafeReviews) {
      for (const reviewTag of review.tags) {
        if (!tagArr.includes(reviewTag)) {
          tagArr.push(reviewTag);
        }
      }
    }
    setAvailableTags(tagArr);
  }, [props.cafeReviews]);
  return (
    <div>
      <h5 className={styles2.header}>Reviews</h5>
      <div className={styles.tagContainer}>
        {/* {availableTags.map((item, idx) => {
          return (
            <CafeTag key={idx} id={idx}>
              {item}
            </CafeTag>
          );
        })} */}
        <div
          className={styles.addTag}
          onClick={() => {
            setShowModal(true);
          }}
        >
          <AddSharpIcon fontSize="small" />
        </div>
        <Modal open={showModal}>
          <Box
            sx={{
              position: "absolute",
              textAlign: "center",
              left: "5%",
              top: "20%",
              width: "90%",
              borderRadius: "6px",
              bgcolor: "background.paper",
              p: 2,
              fontSize: "20px",
              fontFamily: "Poppins",
              color: "#264343",
              fontWeight: 700,
              spacing: "1px",
              outline: 0,
            }}
          >
            Choose tag to filter reviews by:
          </Box>
        </Modal>
      </div>
      <div className={styles.reviewContainer}>
        {props.cafeReviews.map((item, idx) => {
          return (
            <div key={idx}>
              {idx != 0 && <hr key={`hr ${idx}`} />}
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
        })}
      </div>
    </div>
  );
}

export default AboutCafeReview;
