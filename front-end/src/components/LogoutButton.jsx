import React from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./css/LogoutButton.module.css";

function LogoutButton() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    alert("Logging out...");
    navigate("/");
  }
  return (
    <div className={styles.logoutContainer}>
      <LogoutIcon sx={{ color: "#264343" }} />
      <div className={styles.logoutButton} onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
}

export default LogoutButton;
