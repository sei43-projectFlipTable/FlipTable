import React from "react";
import styles from "./css/BackButton.module.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { useNavigate } from "react-router";

function BackButton(props) {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div
      className={`${styles.backbutton} ${props.positionStyle}`}
      onClick={goBack}
    >
      <ArrowBackIosNewOutlinedIcon
        fontSize="small"
        sx={{ color: "#FFFFFF", pr: "3px" }}
      />
    </div>
  );
}

export default BackButton;
