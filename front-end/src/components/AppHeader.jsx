import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/AppHeader.module.css";

function AppHeader() {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    setCounter(0);
    navigate("/");
  }

  if (counter < 10) {
    return (
      <div
        className={styles.appHeader}
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        FlipTable
      </div>
    );
  } else {
    return (
      <div className={styles.appHeader} onClick={handleLogout}>
        Logout
      </div>
    );
  }
}

export default AppHeader;
