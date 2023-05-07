import React, { useState } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import AppHeader from "../components/AppHeader";
import { Link } from "react-router-dom";

import { Box, Button, Modal, Typography } from "@mui/material";
import NavBar from "../components/NavBar";

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
      <br />
      <AppHeader />

      <br />
      <div>Scan your receipt purchase to collect points!</div>
      <br />

      <div className="camera-view">Camera Viewport</div>
      <br />

      <button className="light-button">Light</button>
      <button className="capture-button">Capture</button>
      <button className="upload-photo">photo</button>
      <NavBar />
    </>
  );
}

export default ScanPage;
