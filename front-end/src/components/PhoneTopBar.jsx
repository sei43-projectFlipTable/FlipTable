import React from "react";
import styles from "./css/PhoneTopBar.module.css";
import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import Battery6BarIcon from "@mui/icons-material/Battery6Bar";
import CircleIcon from "@mui/icons-material/Circle";

function PhoneTopBar() {
  const time = new Date();

  return (
    <div className={styles.container}>
      <div className={styles.phone_time}>{`${
        (time.getUTCHours() - time.getTimezoneOffset() / 60) % 24
      }:${
        time.getUTCMinutes() < 10
          ? "0" + time.getUTCMinutes()
          : time.getUTCMinutes()
      }`}</div>
      <div className={styles.camera_hole}>
        <CircleIcon />
      </div>
      <div className={styles.phone_icons}>
        <SignalWifi4BarIcon sx={{ height: "18px" }} />
        <SignalCellular4BarIcon sx={{ height: "18px" }} />
        <Battery6BarIcon sx={{ height: "18px" }} />
      </div>
    </div>
  );
}

export default PhoneTopBar;
