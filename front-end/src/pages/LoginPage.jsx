import React, { useRef, useState } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import AppHeader from "../components/AppHeader";
import styles from "./css/LoginPage.module.css";

import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { fetchData } from "../helpers/common";

function LoginPage() {
  const emailRef = useRef();
  const pwRef = useRef();

  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  const handleRegister = async () => {
    // const email = emailRef.current.value;
    // const password = pwRef.current.value;

    try {
      const { ok, data } = await fetch("/register", undefined, "PUT", {
        email: emailRef.current.value,
        password: pwRef.current.value,
      });

      if (ok) {
        alert("Success! User Registered!");
      } else {
        console.log(data);
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
        <Button>Login</Button>
        <Button onClick={handleRegister}>Register</Button>
      </div>
    </>
  );
}

export default LoginPage;
