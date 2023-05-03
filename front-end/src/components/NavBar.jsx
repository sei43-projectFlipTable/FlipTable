import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import CropFreeIcon from "@mui/icons-material/CropFree";
import PersonIcon from "@mui/icons-material/Person";

function NavBar() {
  return (
    <Box>
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
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "#FFFFFF" }}
          label="Explore"
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "#FFFFFF" }}
          label="Scan"
          icon={<CropFreeIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "#FFFFFF" }}
          label="Saved"
          icon={<FavoriteBorderOutlinedIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "#FFFFFF" }}
          label="Profile"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}

export default NavBar;
