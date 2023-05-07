import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import styles from "./ScanBarModal.module.css";

const Overlay = (props) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h4>Please Select</h4>
        <button className="scan-collect" onClick={() => props.setShowOverlay(false)}>
          Collect Points
        </button>
        <br />
        <Link to="/redeem">
          <button className="scan-redeem">Redeem Cash</button>
        </Link>
      </div>
    </div>
  );
};

function ScanBarModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          //   id={props.id}
          //   name={props.name}
          //   age={props.age}
          //   country={props.country}
          //   getUserData={props.getUserData}
          setShowOverlay={props.setShowOverlay}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
}

export default ScanBarModal;
