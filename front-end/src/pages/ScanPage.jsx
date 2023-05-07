import React, { useState } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import { Link } from "react-router-dom";

import { Box, Button, Modal, Typography } from "@mui/material";

function ScanPage() {
  const [showModal, setShowModal] = useState(true);
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
      <div>
        FlipTable
        <div>?</div>
      </div>
      <br />
      <div>Scan your receipt purchase to collect points!</div>
      <br />

      <div className="camera-view">Camera Viewport</div>
      <br />

      <button className="light-button">Light</button>
      <button className="capture-button">Capture</button>
      <button className="upload-photo">photo</button>
    </>
  );
}

export default ScanPage;
