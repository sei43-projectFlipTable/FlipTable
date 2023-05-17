import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }
  return <button onClick={handleLogout}>LogoutButton</button>;
}

export default LogoutButton;
