import React, { useState, useRef, useContext } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import AppHeader from "../components/AppHeader";
import HelpIcon from "@mui/icons-material/Help";
import { Box, Button, Modal, IconButton } from "@mui/material";
import NavBar from "../components/NavBar";
import styles from "./css/RedeemPage.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { QrScanner } from "@yudiel/react-qr-scanner";
import UserContext from "../context/user";
import { fetchData } from "../helpers/common";

function RedeemPage() {
  const userCtx = useContext(UserContext);
  const redeemAmtRef = useRef();
  const scannerRef = useRef();
  const [showRedeem, setShowRedeem] = useState(false);
  const [amountSubmitted, setAmountSubmitted] = useState(false);
  const [popUpHelp, setPopUpHelp] = useState(false);
  const [redeem, setRedeem] = useState(false);
  const [amount, setAmount] = useState();

  const handleRedeemClose = (e, r) => {
    if (r == "backdropClick") return;
    else {
      setShowRedeem(false);
      setAmountSubmitted(false);
    }
  };

  const handleHelpClose = (e, r) => {
    if (r == "backdropClick") return;
    else setPopUpHelp(false);
  };

  const redeemStyle = {
    position: "absolute",
    textAlign: "center",
    width: "382px",
    height: "232px",
    left: "24px",
    borderRadius: "8px",
    bgcolor: "#264343",
    fontSize: "20px",
    fontFamily: "Poppins",
    color: "#FFFFFF",
    fontWeight: 700,
    spacing: "1px",
    outline: 0,
  };

  const redeemPoints = async (value) => {
    try {
      const { ok: userOk, data: userData } = await fetchData(
        "/user",
        userCtx.accessToken,
        "POST",
        {
          id: userCtx.payload.id,
        }
      );

      const totalPoints = userData.points - value * 10;

      if (totalPoints >= 0) {
        const { ok, data } = await fetchData(
          "/user",
          userCtx.accessToken,
          "PATCH",
          {
            id: userCtx.payload.id,
            points: totalPoints,
          }
        );

        if (ok) {
          return true;
        } else {
          throw new Error(data);
        }
      } else {
        alert("Insufficient points");
        return false;
      }
    } catch (error) {
      alert("Error redeeming points");
      return false;
    }
  };

  const handleHelp = () => {
    setPopUpHelp(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount) {
      alert("Please input Redeem Amount");
    } else {
      const success = await redeemPoints(amount);
      if (success) {
        setAmountSubmitted(true);
      }
    }
  };

  return (
    <>
      {/* redeem modal */}
      <Modal
        open={showRedeem}
        onClose={handleRedeemClose}
        aria-labelledby="collection-modal"
        aria-describedby="collection-modal"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={redeemStyle}>
          <IconButton
            sx={{
              bgcolor: "#839788",
              position: "absolute",
              right: "15px",
              top: "12px",
              height: "40px",
              width: "40px",
            }}
            onClick={handleRedeemClose}
          >
            <CloseIcon
              sx={{
                height: "18px",
                width: "18px",
                color: "white",
                textAlign: "center",
              }}
            />
          </IconButton>
          {!amountSubmitted ? (
            <div className={styles.redeemPrompt}>
              <p style={{ marginBottom: "16px" }}>Cash Redemption Value</p>
              <input
                id="collect-amount"
                className={styles.redeemAmt}
                required
                type="number"
                minLength={1}
                placeholder={redeem}
                onChange={(e) => setAmount(e.target.value)}
              ></input>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  width: "120px",
                  height: "40px",
                  borderRadius: "6px",
                  backgroundColor: "#E88252",
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  fontWeight: 700,
                }}
                onClick={handleSubmit}
              >
                Confirm
              </Button>
            </div>
          ) : (
            <div className={styles.redeemPrompt}>
              <p className={styles.redeemHeader}>You have redeemed</p>
              <div className={styles.redeemAmount}>${amount}</div>
            </div>
          )}
        </Box>
      </Modal>

      {/* help pop up */}
      {popUpHelp && (
        <Box
          onClose={handleHelpClose}
          sx={{
            height: "90%",
            top: "44px",
            borderRadius: "8px",
            position: "absolute",
            zIndex: 9,
          }}
        >
          <IconButton
            sx={{
              bgcolor: "#264343",
              position: "absolute",
              right: "18px",
              top: "15px",
              zIndex: 1,
            }}
            size="small"
            onClick={handleHelpClose}
          >
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
          {/* to re-do into own css after mvp done */}
          <img className={styles.helpPopUp} src="\rewards.png"></img>
        </Box>
      )}

      <PhoneTopBar />
      <AppHeader />
      <div className={styles.mainBody}>
        <div className={styles.redeem}>Redeem</div>
        <div className={styles.helpicon}>
          <HelpIcon onClick={handleHelp} />
        </div>
        <div className={styles.instructions}>
          Scan a FlipTable QR Code to redeem cash!
        </div>

        {/* QR scannner */}

        {!showRedeem && (
          <div className={styles.cameraView} ref={scannerRef}>
            <QrScanner
              videoId="scanner"
              scanDelay={100}
              onDecode={(result) => {
                setShowRedeem(true);
                setAmount(result);
                setRedeem(result);
              }}
              onError={(error) => console.log(error?.message)}
            />
          </div>
        )}
      </div>

      <NavBar />
    </>
  );
}

export default RedeemPage;
