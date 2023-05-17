import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();

  // Call refresh endpoint to refresh access token, if refresh not expired
  async function refreshAccessToken() {
    const refreshTkn = localStorage.getItem("flipRefresh");
    console.log("handling refresh token");
    try {
      if (!refreshTkn) {
        console.log("Refresh token not found!");
        throw new Error("refresh token not found");
      }
      const chkDecoded = jwtDecode(refreshTkn);
      if (new Date(chkDecoded.exp * 1000) - new Date() < 0) {
        console.log("Refresh token expired!");
        throw new Error("refresh token expired");
      } else {
        const { ok, data } = await fetchData("/refresh", undefined, "POST", {
          refresh: refreshTkn,
        });
        if (ok) {
          localStorage.setItem("flipAccess", data.access);
          const decoded = jwtDecode(data.access);
          return { access: data.access, decoded };
        } else {
          throw new Error(data);
        }
      }
    } catch (error) {
      alert(error.message);
      return { decoded: "error", message: error.message };
    }
  }

  async function getAccessToken() {
    //Check existing token
    const accessTkn = localStorage.getItem("flipAccess");
    if (!accessTkn) {
      // Get new access token if no existing token
      const { access, decoded } = await refreshAccessToken();
      if (decoded === "error") {
        navigate("/");
        return;
      }
      setAccessToken(access);
      setPayload(decoded);
    } else {
      // Check expiry of existing token
      const chkDecoded = jwtDecode(accessTkn);
      if (new Date(chkDecoded.exp * 1000) - new Date() < 0) {
        // Get new access token if existing expired
        const { access, decoded } = await refreshAccessToken();
        if (decoded === "error") {
          navigate("/");
          return;
        }
        setAccessToken(access);
        setPayload(decoded);
      } else {
        // Reuse existing, unexpired access token
        setAccessToken(accessTkn);
        setPayload(chkDecoded);
      }
    }
  }

  useEffect(() => {
    if (location.pathname != "/") getAccessToken();
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{
          accessToken,
          setAccessToken,
          payload,
          setPayload,
          getAccessToken,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={<LoginPage getAccessToken={getAccessToken} />}
          />
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
