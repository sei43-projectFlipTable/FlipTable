import React from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <PhoneTopBar />
      <Link to="/home">
        <div>Login here</div>
      </Link>
    </>
  );
}

export default LoginPage;
