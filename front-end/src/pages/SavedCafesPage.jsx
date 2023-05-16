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

  // GET all user cafes
  async function getUserCafes() {
    try {
      const { ok, data } = await fetchData("/api/cafes", userCtx.accessToken);
      if (ok) {
        setCafeData(data);
      } else {
        throw new Error(data);
      }
    } catch (error) {
      alert("Error getting cafes");
    }
  }

  useEffect(() => {
    getUserCafes();
  }, []);

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
