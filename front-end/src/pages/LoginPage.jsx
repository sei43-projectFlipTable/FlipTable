import React, { useRef, useContext } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import AppHeader from "../components/AppHeader";
import styles from "./css/LoginPage.module.css";
import jwtDecode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";

function LoginPage() {
  const emailRef = useRef();
  const pwRef = useRef();
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const { ok, data } = await fetchData("/register", undefined, "PUT", {
        email: emailRef.current.value,
        password: pwRef.current.value,
      });

      if (ok) {
        alert("Success! User Registered!");
        emailRef.current.value = "";
        pwRef.current.value = "";
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const { ok, data } = await fetchData("/login", undefined, "POST", {
        email: emailRef.current.value,
        password: pwRef.current.value,
      });

      if (ok) {
        userCtx.setAccessToken(data.access);
        const decoded = jwtDecode(data.access);
        console.log(decoded);
        navigate("/home");
        alert("login successful");
      } else {
        alert("login unsuccessful, try again");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <PhoneTopBar />
      <div className={styles.login}>
        <AppHeader />
        <TextField id="standard-basic" label="Email" variant="standard" inputRef={emailRef} />
        <TextField id="standard-basic2" label="Password" variant="standard" inputRef={pwRef} />
        <Button onClick={handleLogin}>Login</Button>

        <Button onClick={handleRegister}>Register</Button>
      </div>
    </>
  );
}

export default LoginPage;
