import React from "react";
import styles from "./css/NavBar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import CropFreeIcon from "@mui/icons-material/CropFree";
import PersonIcon from "@mui/icons-material/Person";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.navBar}>
      <NavLink
        className={(navData) => (navData.isActive ? styles.active : "")}
        to="/home"
        style={{ textDecoration: "none" }}
      >
        <div className={styles.iconFrame}>
          <HomeIcon sx={{ color: "#FFFFFF" }} />
          <div className={styles.iconLabel}>Home</div>
        </div>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? styles.active : "")}
        to="/explore"
        style={{ textDecoration: "none" }}
      >
        <div className={styles.iconFrame}>
          <SearchSharpIcon sx={{ color: "#FFFFFF" }} />
          <div className={styles.iconLabel}>Explore</div>
        </div>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? styles.activeScan : "")}
        to="/scan"
        state={{ promptScanCollect: true }}
        style={{ textDecoration: "none" }}
      >
        <div className={styles.scanIconFrame}>
          <CropFreeIcon sx={{ color: "#FFFFFF" }} />
          <div className={styles.iconLabel}>Scan</div>
        </div>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? styles.active : "")}
        to="/saved"
        style={{ textDecoration: "none" }}
      >
        <div className={styles.iconFrame}>
          <FavoriteBorderOutlinedIcon sx={{ color: "#FFFFFF" }} />
          <div className={styles.iconLabel}>Saved</div>
        </div>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? styles.active : "")}
        to="/profile"
        style={{ textDecoration: "none" }}
      >
        <div className={styles.iconFrame}>
          <PersonIcon sx={{ color: "#FFFFFF" }} />
          <div className={styles.iconLabel}>Profile</div>
        </div>
      </NavLink>
    </div>
  );
}

export default NavBar;
