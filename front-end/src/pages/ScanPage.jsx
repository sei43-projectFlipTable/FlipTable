import React, { useState } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import { Box, Button, Modal, Typography } from "@mui/material";

function ScanPage() {
  const [showModal, setShowModal] = useState(true);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const style = {
    position: "absolute",
    textAlign: "center",
    top: "40%",
    width: "100%",
    bgcolor: "background.paper",
    border: "2px solid #000",
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
      >
        <Box sx={style}>
          Please Select
          <br />
          <Button onClick={handleClose}>Collect Points</Button>
          <br />
          <Button>Redeem Cash</Button>
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
