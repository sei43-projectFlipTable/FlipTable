import React, { useState } from "react";
import PhoneTopBar from "../components/PhoneTopBar";
import ScanBarModal from "../components/ScanBarModal";

function ScanPage() {
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <>
      {showOverlay && <ScanBarModal setShowOverlay={setShowOverlay} />}

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
