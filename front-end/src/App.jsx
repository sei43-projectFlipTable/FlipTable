import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ScanPage from "./pages/ScanPage";
import RedeemPage from "./pages/RedeemPage";
import ReferralPage from "./pages/ReferralPage";
import ExplorePage from "./pages/ExplorePage";
import AboutCafePage from "./pages/AboutCafePage";
import SavedCafesPage from "./pages/SavedCafesPage";
import ProfilePage from "./pages/ProfilePage";
import UserContext from "./context/user";
import jwtDecode from "jwt-decode";
import { fetchData } from "./helpers/common";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [payload, setPayload] = useState({});
  const navigate = useNavigate();

  async function refreshAccessToken() {
    try {
      const { ok, data } = await fetchData("/refresh", undefined, "POST", {
        refresh: localStorage.getItem("flipRefresh"),
      });
      if (ok) {
        // setAccessToken(data.access);
        localStorage.setItem("flipAccess", data.access);
        const decoded = jwtDecode(data.access);
        setPayload(decoded);
        navigate("/home");
        alert("Resuming old session");
      } else {
        throw new Error(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  function getAccessToken() {
    //check expiry
    const accessTkn = localStorage.getItem("flipAccess");
    const decoded = jwtDecode(accessTkn);
    setPayload(decoded);
    return accessTkn;
  }

  return (
    <>
      <UserContext.Provider
        value={{
          accessToken,
          setAccessToken,
          payload,
          setPayload,
          refreshAccessToken,
          getAccessToken,
        }}
      >
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/redeem" element={<RedeemPage />} />
          <Route path="/referral" element={<ReferralPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/about/:cafeId" element={<AboutCafePage />} />
          <Route path="/saved" element={<SavedCafesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
