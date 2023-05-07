import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import CropFreeIcon from "@mui/icons-material/CropFree";
import PersonIcon from "@mui/icons-material/Person";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <BottomNavigation
      showLabels
      sx={{
        width: "430px",
        height: "50px",
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "#264343",
        borderRadius: "6px 6px 0px 0px",
      }}
      // value={value}
    >
      <BottomNavigationAction
        sx={{ color: "#FFFFFF", zIndex: 10 }}
        label="Home"
        icon={
          <Link style={{ color: "white" }} to="/home">
            <HomeIcon />
          </Link>
        }
      />
      <BottomNavigationAction
        sx={{ color: "#FFFFFF", zIndex: 10 }}
        label="Explore"
        icon={
          <Link style={{ color: "white" }} to="/explore">
            <SearchIcon />
          </Link>
        }
      />
      <BottomNavigationAction
        sx={{
          color: "#FFFFFF",
          zIndex: 10,
          top: "-21px",
          width: "50px",
          height: "66px",
          margin: "0 12px",
          borderRadius: "100%",
        }}
        label="Scan"
        icon={
          <Link
            style={{ color: "white" }}
            to="/scan"
            state={{ promptScanCollect: true }}
          >
            <CropFreeIcon />
          </Link>
        }
      />
      {/* <div className={styles.circle} /> */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 9,
          borderRadius: "100px",
          backgroundColor: "#264343",
          left: "182px",
          top: "-21px",
          width: "66px",
          height: "66px",
        }}
      />
      <BottomNavigationAction
        sx={{ color: "#FFFFFF", zIndex: 10 }}
        label="Saved"
        icon={
          <Link style={{ color: "white" }} to="/saved">
            <FavoriteBorderOutlinedIcon />
          </Link>
        }
      />
      <BottomNavigationAction
        sx={{ color: "#FFFFFF", zIndex: 10 }}
        label="Profile"
        icon={
          <Link style={{ color: "white" }} to="/profile">
            <PersonIcon />
          </Link>
        }
      />
    </BottomNavigation>
  );
}

export default NavBar;
