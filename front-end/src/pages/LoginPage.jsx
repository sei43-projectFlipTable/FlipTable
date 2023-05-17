import React, { useRef, useContext, useEffect, useState } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import AppHeader from "../components/AppHeader";
import styles from "./css/LoginPage.module.css";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function LoginPage() {
  const emailRef = useRef();
  const pwRef = useRef();
  const userCtx = useContext(UserContext);
  const [showPW, setShowPW] = useState(false);
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
        localStorage.setItem("flipAccess", data.access);
        localStorage.setItem("flipRefresh", data.refresh);
        userCtx.setAccessToken(data.access);
        const decoded = jwtDecode(data.access);
        userCtx.setPayload(decoded);
        navigate("/home");
        alert("login successful");
      } else {
        alert("login unsuccessful, try again");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("flipAccess")) {
      return;
    } else {
      const refreshToken = localStorage.getItem("flipRefresh");
      if (refreshToken) {
        const chkDecoded = jwtDecode(refreshToken);
        if (new Date().setUTCSeconds(chkDecoded.exp) - new Date() > 0) {
          userCtx.getAccessToken();
          navigate("/home");
          alert("Resuming old session...");
        } else {
          localStorage.removeItem("flipRefresh");
        }
      }
    }
  }, []);

  return (
    <>
      <PhoneTopBar />
      <div className={styles.login}>
        <AppHeader />
        <TextField
          sx={{ width: "50%" }}
          id="standard-basic"
          label="Email"
          variant="standard"
          inputRef={emailRef}
        />
        <FormControl sx={{ width: "50%" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPW ? "text" : "password"}
            inputRef={pwRef}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPW((show) => !show)}
                >
                  {showPW ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button onClick={handleLogin}>Login</Button>

        <Button onClick={handleRegister}>Register</Button>
      </div>
    </>
  );
}

export default LoginPage;
