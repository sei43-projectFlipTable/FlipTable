import React, { useState, useContext } from "react";
import styles from "./css/InviteCard.module.css";
import UserContext from "../context/user";
import { fetchData } from "../helpers/common";

function InviteCard(props) {
  //adding referred users
  const userCtx = useContext(UserContext);
  const updateReferredUsers = async () => {
    console.log(props.email);
    console.log(userCtx.payload.email);
    try {
      let usersReferred = userCtx.payload.referredCount;
      usersReferred = usersReferred + 1;
      let userPoints = userCtx.payload.points;
      userPoints = userPoints + usersReferred * 500;

      const { ok, data } = await fetchData(
        "/user",
        userCtx.accessToken,
        "PATCH",
        {
          email: userCtx.payload.email,
          referredCount: usersReferred,
          points: userPoints,
        }
      );

      const { ok2 = ok, data2 = data } = await fetchData(
        "/user",
        userCtx.accessToken,
        "PATCH",
        {
          email: props.email,
          wasReferred: true,
        }
      );

      if (ok && ok2) {
        alert("referral updated");
        const updatedReferredCount = {
          ...userCtx.payload,
          referredCount: usersReferred,
          points: userPoints,
        };
        userCtx.setPayload(updatedReferredCount);
        props.getUsers();
      } else {
        console.log(data, data2);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.nameTextFrame}>
      <div className={styles.profilePic}></div>
      <div className={styles.nameText}>{props.email}</div>
      <button
        className={styles.inviteBtn}
        style={{ border: "none" }}
        onClick={() => {
          updateReferredUsers();
        }}
      >
        Invite
      </button>
    </div>
  );
}

export default InviteCard;
