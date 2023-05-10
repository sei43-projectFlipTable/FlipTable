import React, { useState } from "react";
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

function ScanPage() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(
    location.state?.promptScanCollect || false
  );
  // const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
        <div className={styles.collect}>Collect</div>
        <div className={styles.helpicon}>
          <HelpIcon /> {/*onclick =  popup for the help*/}
        </div>

        <div className={styles.instructions}>
          Scan your receipt purchase to collect points!
        </div>
        <div className={styles.cameraView}>Camera Viewport</div>
        <div className={styles.cameraFunctions}>
          <button className="light-button">
            <FlashAutoIcon sx={{ fontSize: 35 }} />
          </button>
          <button className={styles.captureButton}>
            <PhotoCameraIcon sx={{ color: "#264343", fontSize: 35 }} />
          </button>
          <button className="upload-photo">
            <AddPhotoAlternateIcon sx={{ fontSize: 40 }} />
          </button>
        </div>
      </div>

      <NavBar />
    </>
  );
}

export default ScanPage;
