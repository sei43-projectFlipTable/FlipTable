import React, { useState, useEffect, useContext } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import AppHeader from "../components/AppHeader";
import NavBar from "../components/NavBar";
import styles from "./css/ReferralPage.module.css";
import { fetchData } from "../helpers/common";
import { Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InviteCard from "../components/InviteCard";
import BackButton from "../components/BackButton";
import UserContext from "../context/user";

function ReferralPage() {
  //user context to fetch payload
  const userCtx = useContext(UserContext);
  const [users, setUsers] = useState([]);

  //toggling for invite and share drawers
  const [inviteDrawer, setInviteDrawer] = useState({ bottom: false });
  const toggleInviteDrawer = (anchor, open) => () => {
    setInviteDrawer({ [anchor]: open });
  };
  const [shareDrawer, setShareDrawer] = useState({ bottom: false });
  const toggleShareDrawer = (anchor, open) => () => {
    setShareDrawer({ [anchor]: open });
  };

  //fetch users
  const getUsers = async () => {
    const { ok, data } = await fetchData("/users/");
    //filter out only users with wasReferred:false
    const onlyNotReferredUsers = data.filter((user) => {
      return user.wasReferred === false && user.email !== userCtx.payload.email;
    });
    if (ok) {
      setUsers(onlyNotReferredUsers);
    } else {
      console.log(data);
    }
  };
  //run fetch on mount
  useEffect(() => {
    getUsers();
  }, []);

  //states for copy button
  const [buttonText, setButtonText] = useState("Copy");
  const [buttonStyle, setButtonStyle] = useState({ border: 0 });
  const borderStyle = {
    border: "none",
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(userCtx.payload.referralCode);
      setButtonText("Copied");
      setButtonStyle({
        backgroundColor: "#FFFFFF",
        color: "#E88252",
        border: "none",
        ...borderStyle,
      });
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  //adding referred users
  const updateReferredUsers = async () => {};

  return (
    <>
      <BackButton positionStyle={styles.backbuttonpos} />
      <PhoneTopBar />
      <AppHeader />
      <div className={styles.referralHeaderFrame}>
        <div className={styles.referralHeader}>Refer and Earn</div>
      </div>
      <div className={styles.greyFrame}>
        <div className={styles.referFrame}>
          <div className={styles.referHeaderFrame}>
            <div className={styles.referHeader}>
              Refer a friend, get 500 points
            </div>
            <div className={styles.giftIconFrame}>
              <img src="/giftbox.png" style={{ height: 25, width: 25 }} />
            </div>
          </div>
          <div className={styles.referralCodeFrame}>
            <div className={styles.referralCode}>
              {userCtx.payload.referralCode}
            </div>
            <button
              className={styles.referralCodeCopyBtn}
              onClick={() => {
                handleCopy();
              }}
              style={{ ...buttonStyle }}
            >
              {buttonText}
            </button>
          </div>
          <div className={styles.actionBtnsFrame}>
            <button
              className={styles.share}
              onClick={toggleShareDrawer("bottom", true)}
              style={{ border: "none" }}
            >
              Share
            </button>
            <button
              className={styles.invite}
              onClick={toggleInviteDrawer("bottom", true)}
              style={{ border: "none" }}
            >
              Invite from Contact
            </button>
          </div>
          <div className={styles.referralHistory}>
            <div className={styles.referralHistoryHeader}>Referral History</div>
            <div className={styles.referralStatsFrame}>
              <div className={styles.referralUsageFrame}>
                <div>1</div>
                <div className={styles.referralsUsedText}>
                  Friend(s) have used your referral code
                </div>
              </div>
              <div className={styles.referralPointsEarnedFrame}>
                <div>500</div>
                <div className={styles.referralsUsedText}>
                  Points earned through referrals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavBar />

      {/* DRAWERS */}

      {/* INVITE */}
      <Drawer
        anchor="bottom"
        open={inviteDrawer["bottom"]}
        onClose={toggleInviteDrawer("bottom", false)}
        BackdropProps={{ invisible: true }}
        PaperProps={{ elevation: 0, style: { backgroundColor: "transparent" } }}
      >
        <IconButton
          sx={{
            bgcolor: "#264343",
            position: "absolute",
            right: "30px",
            top: "30px",
          }}
          onClick={toggleInviteDrawer("bottom", false)}
        >
          <CloseIcon sx={{ color: "white", fontWeight: 700 }} />
        </IconButton>
        <div className={styles.inviteDrawer}>
          <div className={styles.inviteDrawerHeaderFrame}>
            <div className={styles.inviteDrawerHeader}>Invite a Friend!</div>
            <img
              src="/custom_icons/SearchBar.png"
              className={styles.searchBar}
            />
            <div className={styles.friendsList}>
              {users.map((user) => {
                return (
                  <InviteCard
                    key={user._id}
                    id={user._id}
                    email={user.email}
                    referredCount={user.referredCount}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <NavBar />
      </Drawer>

      {/* SHARE */}

      <Drawer
        anchor="bottom"
        open={shareDrawer["bottom"]}
        onClose={toggleShareDrawer("bottom", false)}
        BackdropProps={{ invisible: true }}
        PaperProps={{ elevation: 0, style: { backgroundColor: "transparent" } }}
      >
        <IconButton
          sx={{
            bgcolor: "#264343",
            position: "absolute",
            right: "30px",
            top: "30px",
          }}
          onClick={toggleShareDrawer("bottom", false)}
        >
          <CloseIcon sx={{ color: "white", fontWeight: 700 }} />
        </IconButton>
        <div className={styles.inviteDrawer}>
          <div className={styles.inviteDrawerHeader}>Refer a friend</div>
          <div className={styles.shareDrawerText}>
            Join me on FlipTable! Here is 500 points to get you started working
            at your favourite cafe! Terms an..
          </div>
          <img className={styles.shareBox} src="/share.png/" />
        </div>

        <NavBar />
      </Drawer>
    </>
  );
}

export default ReferralPage;
