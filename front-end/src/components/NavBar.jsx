import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
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
        width: 430,
        height: 50,
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "#264343",
        borderRadius: "6px 6px 0px 0px",
      }}
      // value={value}
    >
      <BottomNavigationAction
        sx={{ color: "#FFFFFF" }}
        label="Home"
        icon={
          <Link style={{ color: "white" }} to="/home">
            <HomeIcon />
          </Link>
        }
      />
      <BottomNavigationAction
        sx={{ color: "#FFFFFF" }}
        label="Explore"
        icon={
          <Link style={{ color: "white" }} to="/explore">
            <SearchIcon />
          </Link>
        }
      />
      <BottomNavigationAction
        sx={{ color: "#FFFFFF" }}
        label="Scan"
        icon={
          <Link style={{ color: "white" }} to="/scan">
            <CropFreeIcon />
          </Link>
        }
      />

      <BottomNavigationAction
        sx={{ color: "#FFFFFF" }}
        label="Saved"
        icon={
          <Link style={{ color: "white" }} to="/saved">
            <FavoriteBorderOutlinedIcon />
          </Link>
        }
      />
      <BottomNavigationAction
        sx={{ color: "#FFFFFF" }}
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
