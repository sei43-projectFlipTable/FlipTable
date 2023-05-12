import React, { useState, useRef, useCallback } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import AppHeader from "../components/AppHeader";
import { Link, useLocation } from "react-router-dom";
import HelpIcon from "@mui/icons-material/Help";
import { Box, Button, Modal, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import styles from "./css/ScanBody.module.css";
import FlashAutoIcon from "@mui/icons-material/FlashAuto";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Webcam from "react-webcam";

function ScanPage() {
  const webcamRef = useRef(null);
  const [img, setImg] = useState(null);
  const location = useLocation();
  const [showModal, setShowModal] = useState(location.state?.promptScanCollect || false);

  const handleClose = (e, r) => {
    if (r == "backdropClick") return;
    else setShowModal(false);
  };

  const videoConstraints = {
    width: 330,
    height: 400,
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot(); //returns base64 encoded string
    saveImg(imageSrc);
    setImg(imageSrc);
    // console.log("img is", imageSrc);
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

  const saveImg = async (img) => {
    const res = await fetch(import.meta.env.VITE_SERVER + "/scan/img", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        receipt: img,
      }),
    });

    if (res.status === 200) {
      alert("image saved");
    } else alert("an error has occured");
  };

  return (
    <>
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
          <Link to="/redeem">
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
                textShadow: "none",
              }}
            >
              Redeem Cash
            </Button>
          </Link>
        </Box>
      </Modal>

      <PhoneTopBar />
      <AppHeader />
      <div className={styles.mainBody}>
        {/* show functions only when modal is closed */}
        {!showModal && (
          <>
            <div className={styles.collect}>Collect</div>
            <div className={styles.helpicon}>
              <HelpIcon /> {/*onclick =  popup for the help*/}
            </div>
            <div className={styles.instructions}>Scan your receipt purchase to collect points!</div>

            {/* conditional formatting to toggle webcam and screenshot */}
            {/* will change to a component*/}
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

      <NavBar />
    </>
  );
}

export default ScanPage;
