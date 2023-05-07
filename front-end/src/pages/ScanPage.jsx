import React, { useState } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import AppHeader from "../components/AppHeader";
import { Link } from "react-router-dom";
import HelpIcon from "@mui/icons-material/Help";
import { Box, Button, Modal, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import styles from "../components/ScanBody.module.css";
import FlashAutoIcon from "@mui/icons-material/FlashAuto";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

function ScanPage() {
  const [showModal, setShowModal] = useState(false);
  // const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const style = {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    bgcolor: "background.paper",
    p: 2,
    fontSize: "1.5rem",
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
          <Button onClick={handleClose} sx={{ border: "1px solid black" }}>
            Collect Points
          </Button>
          <br />
          <Link to="/redeem">
            <Button sx={{ border: "1px solid black" }}>Redeem Cash</Button>
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

        <div className={styles.instructions}>Scan your receipt purchase to collect points!</div>
        <div className={styles.cameraView}>Camera Viewport</div>
        <div className={styles.cameraFunctions}>
          <button className="light-button">
            <FlashAutoIcon />
          </button>
          <button className={styles.captureButton}>
            <PhotoCameraIcon sx={{ color: "#264343", height: "26px", width: "24px" }} />
          </button>
          <button className="upload-photo">
            <AddPhotoAlternateIcon />
          </button>
        </div>
      </div>

      <NavBar />
    </>
  );
}

export default ScanPage;
