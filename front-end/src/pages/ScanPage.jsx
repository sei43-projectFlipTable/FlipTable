import React, { useState, useRef, useCallback, useContext, useEffect } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import AppHeader from "../components/AppHeader";
import { Link, useLocation } from "react-router-dom";
import HelpIcon from "@mui/icons-material/Help";
import { Box, Button, Modal, IconButton, Dialog } from "@mui/material";
import NavBar from "../components/NavBar";
import styles from "./css/ScanBody.module.css";
import CloseIcon from "@mui/icons-material/Close";
import FlashAutoIcon from "@mui/icons-material/FlashAuto";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Webcam from "react-webcam";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";

function ScanPage() {
  const location = useLocation();
  const userCtx = useContext(UserContext);
  const webcamRef = useRef(null);
  const [amount, setAmount] = useState();
  const [img, setImg] = useState(null);
  const [showModal, setShowModal] = useState(location.state?.promptScanCollect || false);
  const [showCollection, setShowCollection] = useState(false);
  const [amountSubmitted, setAmountSubmitted] = useState(false);
  const [popUpHelp, setPopUpHelp] = useState(false);

  const handleClose = (e, r) => {
    if (r == "backdropClick") return;
    else setShowModal(false);
  };

  const handleCollectionClose = (e, r) => {
    if (r == "backdropClick") return;
    else {
      setShowCollection(false);
      setAmountSubmitted(false);
      setImg(null);
      setAmount();
    }
  };

  const handleHelpClose = (e, r) => {
    if (r == "backdropClick") return;
    else setPopUpHelp(false);
  };

  const videoConstraints = {
    width: 330,
    height: 400,
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot(); //returns base64 encoded string
    setImg(imageSrc);
    saveImg(imageSrc);
    setShowCollection(true);
  }, [webcamRef]);

  const style = {
    position: "absolute",
    textAlign: "center",
    left: "5%",
    width: "90%",
    borderRadius: "6px",
    bgcolor: "background.paper",
    p: 2,
    fontSize: "20px",
    fontFamily: "Poppins",
    color: "#264343",
    fontWeight: 700,
    spacing: "1px",
    outline: 0,
  };

  const collectionStyle = {
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

  const saveImg = async (img) => {
    const { ok, data } = await fetchData("/scan/img", userCtx.accessToken, "PUT", { receipt: img });

    if (ok) {
      alert("image saved");
    } else alert("an error has occured");
  };

  const collectPoints = async (value) => {
    try {
      const { ok: userOk, data: userData } = await fetchData("/user", userCtx.accessToken, "POST", {
        id: userCtx.payload.id,
      });
      console.log("user.points is ", userData.points);

      const totalPoints = userData.points + value * 10;

      const { ok, data } = await fetchData("/user", userCtx.accessToken, "PATCH", {
        id: userCtx.payload.id,
        points: totalPoints,
      });

      if (ok) {
        alert("points updated");
      } else {
        throw new Error(data);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) {
      alert("cannot submit empty field");
    } else {
      collectPoints(amount);
      setAmountSubmitted(true);
    }
  };

  const handleHelp = () => {
    setPopUpHelp(true);
  };

  return (
    <>
      {/* scan page modal */}
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="scan-page-modal"
        aria-describedby="scan-page-modal"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={style}>
          Please Select
          <br />
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              textTransform: "none",
              width: "350px",
              height: "50px",
              borderRadius: "6px",
              backgroundColor: "#264343",
              mt: 1,
              mb: 1,
              fontSize: "20px",
              fontFamily: "Poppins",
              color: "white",
              fontWeight: 700,
            }}
          >
            Collect Points
          </Button>
          <br />
          <Link to="/scan/redeem">
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                width: "350px",
                height: "50px",
                borderRadius: "6px",
                backgroundColor: "#E88252",
                fontSize: "20px",
                fontFamily: "Poppins",
                color: "white",
                fontWeight: 700,
              }}
            >
              Redeem Cash
            </Button>
          </Link>
        </Box>
      </Modal>

      {/* collect modal */}
      <Modal
        open={showCollection}
        onClose={handleCollectionClose}
        aria-labelledby="collection-modal"
        aria-describedby="collection-modal"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={collectionStyle}>
          <IconButton
            sx={{
              bgcolor: "#839788",
              position: "absolute",
              right: "15px",
              top: "12px",
              height: "40px",
              width: "40px",
            }}
            onClick={handleCollectionClose}
          >
            <CloseIcon
              sx={{
                height: "18px",
                width: "18px",
                color: "white",
              }}
            />
          </IconButton>
          {!amountSubmitted && (
            <>
              <p style={{ marginBottom: "16px" }}>Receipt Total Amount</p>
              <input
                id="collect-amount"
                className={styles.collectAmt}
                required
                type="number"
                minLength={1}
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
                  p: 0,
                }}
                onClick={handleSubmit}
              >
                Confirm
              </Button>
            </>
          )}
          {amountSubmitted && (
            <div className={styles.collectResult}>
              <div>You have collected</div>
              <p className={styles.result}>
                $ {amount} ({Math.floor(amount * 10)} points)
              </p>
              <p className={styles.ack}>Your receipt will be verified within 24hrs</p>
            </div>
          )}
        </Box>
      </Modal>

      <Dialog
        hideBackdrop
        open={popUpHelp}
        onClose={handleHelpClose}
        fullScreen
        sx={{
          height: "90%",
          top: "44px",
          borderRadius: "8px",
          position: "absolute",
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
        <img className={styles.helpPopUp} src="\collect.png"></img>
      </Dialog>

      <PhoneTopBar />

      <AppHeader />
      <div className={styles.mainBody}>
        {/* show functions only when scan modal is closed */}
        {!showModal && (
          <>
            <div className={styles.collect}>Collect</div>
            <div className={styles.helpicon}>
              <HelpIcon onClick={handleHelp} />
            </div>
            <div className={styles.instructions}>Scan your receipt purchase to collect points!</div>

            {/* conditional formatting to toggle webcam and screenshot */}
            {img === null ? (
              <Webcam
                className={styles.cameraView}
                audio={false}
                mirrored={true}
                height={400}
                width={330}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
            ) : (
              <img src={img} alt="screenshot" className={styles.cameraView} />
            )}
            <div className={styles.cameraFunctions}>
              <button className="light-button">
                <FlashAutoIcon sx={{ fontSize: 40 }} />
              </button>
              <button className={styles.captureButton} onClick={capture}>
                <PhotoCameraIcon sx={{ color: "#264343", fontSize: 35 }} />
              </button>
              <button className="upload-photo">
                <AddPhotoAlternateIcon sx={{ fontSize: 40 }} />
              </button>
            </div>
          </>
        )}
      </div>

      <NavBar setShowModal={setShowModal} />
    </>
  );
}

export default ScanPage;
