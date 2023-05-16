import React, { useState, useEffect, useContext } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import NavBar from "../components/NavBar";
import AppHeader from "../components/AppHeader";
import { fetchData } from "../helpers/common";
import SaveExploreDisplay from "../components/SaveExploreDisplay";
import UserContext from "../context/user";

function SavedCafesPage() {
  const userCtx = useContext(UserContext);
  const [cafeData, setCafeData] = useState([]);

  // POST user saved cafes
  async function getUserCafes() {
    try {
      const { ok, data } = await fetchData(
        "/user",
        userCtx.accessToken,
        "POST",
        {
          email: userCtx.payload.email,
        }
      );
      if (ok) {
        setCafeData(data.savedPlaces);
      } else {
        throw new Error(data);
      }
    } catch (error) {
      console.error(error.message);
      alert("Error getting user info");
    }
  }

  useEffect(() => {
    if (userCtx.accessToken != "") {
      getUserCafes();
    }
  }, [userCtx.accessToken]);

  return (
    <>
      <PhoneTopBar />
      <AppHeader />
      <SaveExploreDisplay cafeData={cafeData}>Saved Cafes</SaveExploreDisplay>
      <NavBar />
    </>
  );
}

export default SavedCafesPage;
