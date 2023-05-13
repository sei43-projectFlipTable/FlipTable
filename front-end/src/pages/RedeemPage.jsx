import React, { useState, useRef } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import AppHeader from "../components/AppHeader";
import HelpIcon from "@mui/icons-material/Help";
import { Box, Button, Modal, IconButton, Dialog } from "@mui/material";
import NavBar from "../components/NavBar";
import styles from "./css/RedeemPage.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { QrScanner } from "@yudiel/react-qr-scanner";

function RedeemPage() {
  const redeemAmtRef = useRef();
  const [showRedeem, setShowRedeem] = useState(false);
  const [amountSubmitted, setAmountSubmitted] = useState(false);
  const [popUpHelp, setPopUpHelp] = useState(false);

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
    p: "45px",
    fontSize: "20px",
    fontFamily: "Poppins",
    color: "#FFFFFF",
    fontWeight: 700,
    spacing: "1px",
    outline: 0,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (redeemAmtRef.current.value == "") {
      alert("cannot submit empty field");
    } else setAmountSubmitted(true);
  };

  const handleHelp = () => {
    setPopUpHelp(true);
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
            sx={{ bgcolor: "#839788", position: "absolute", right: "12px", top: "15px" }}
            onClick={handleRedeemClose}
          >
            <CloseIcon sx={{ color: "white", fontWeight: 700 }} />
          </IconButton>
          {!amountSubmitted ? (
            <>
              <p>Cash Redemption Amount</p>
              <input
                id="collect-amount"
                className={styles.redeemAmt}
                required
                type="number"
                minLength={1}
                ref={redeemAmtRef}
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
            </>
          ) : (
            <>
              <p>You have redeemed</p>
              <div>${redeemAmtRef.current.value}</div>
            </>
          )}
        </Box>
      </Modal>

      {/* help pop up */}
      <Dialog
        hideBackdrop
        open={popUpHelp}
        onClose={handleHelpClose}
        fullScreen
        sx={{ height: "90%", top: "44px", borderRadius: "8px", position: "absolute" }}
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
      </Dialog>

      <PhoneTopBar />
      <AppHeader />
      <div className={styles.mainBody}>
        <div className={styles.redeem}>Redeem</div>
        <div className={styles.helpicon}>
          <HelpIcon onClick={handleHelp} />
        </div>
        <div className={styles.instructions}>Scan a FlipTable QR Code to redeem cash!</div>

        {/* QR scannner */}

        <div className={styles.cameraView}>
          <QrScanner
            scanDelay={1000}
            onDecode={(result) => console.log(result)}
            // onDecode={() => setShowRedeem(true)}
            onError={(error) => console.log(error?.message)}
          />
        </div>
      </div>

      <NavBar />
    </>
  );
}

export default RedeemPage;
