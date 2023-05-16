import React from "react";
import styles from "./css/InviteCard.module.css";

function InviteCard(props) {
  //adding referred users
  const updateReferredUsers = async () => {
    try {
      let usersReferred = userCtx.payload.referredCount;
      usersReferred = usersReferred + 1;
      const { ok, data } = await fetchData(
        "/scan/collect",
        userCtx.accessToken,
        "PATCH",
        {
          email: userCtx.payload.email,
          referredCount: usersReferred,
        }
      );

      const { ok2, data2 } = await fetchData(
        "/scan/collect",
        userCtx.accessToken,
        "PATCH",
        {
          email: userCtx.payload.email,
          referredCount: usersReferred,
        }
      );

      if (ok && ok2) {
        alert("referral updated");
        const updatedReferredCount = {
          ...userCtx.payload,
          referredCount: usersReferred,
        };
        userCtx.setPayload(updatedReferredCount);
      } else {
        throw error;
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={styles.nameTextFrame}>
      <div className={styles.profilePic}></div>
      <div className={styles.nameText}>{props.email}</div>
      <button className={styles.inviteBtn} style={{ border: "none" }}>
        Invite
      </button>
    </div>
  );
}

export default InviteCard;
