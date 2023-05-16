import React from "react";
import styles from "./css/InviteCard.module.css";

function InviteCard(props) {
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
