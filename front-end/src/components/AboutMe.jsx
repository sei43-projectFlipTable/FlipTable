import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import styles from "./css/AboutMe.module.css";
import { Link } from "react-router-dom";

const AboutMe = () => {
  //   const [aboutMe, setAboutMe] = useState("Write about yourself here!");
  const [editing, setEditing] = useState(true);
  const [displayText, setDisplayText] = useState("Write about yourself!");
  const [inputText, setInputText] = useState("");
  //reverse the true and false for better clarity
  const updateAll = () => {
    setDisplayText(inputText);
    setEditing(true);
  };

  const updateEditFalse = () => {
    setEditing(false);
  };

  const updateEditTrue = () => {
    setEditing(true);
    setInputText("");
  };
  return (
    <>
      <div className={styles.homePageScroll}>
        {editing ? (
          <div className={styles.referralComponentSpace}>
            <div className={styles.referralHeaderSpace}>
              <div className={styles.referralHeaderTextSpace}>
                <div className={styles.referralHeaderText}>About Me</div>
              </div>
            </div>
            <div onClick={updateEditFalse} className={styles.referralBodySpace}>
              <div className={styles.referralBodyDescriptionSpace}>
                <div className={styles.referralBodyDescription}>
                  {displayText}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.referralComponentSpace}>
              <div className={styles.referralHeaderSpace}>
                <div className={styles.referralHeaderTextSpace}>
                  <div className={styles.referralHeaderText}>About Me</div>
                </div>
              </div>
              <div className={styles.aboutMeBodySpace}>
                <div className={styles.referralBodyDescriptionSpace}>
                  <div className={styles.referralBodyDescription}>
                    <input
                      className={styles.noborder}
                      style={{
                        width:
                          Math.min(Math.max(inputText.length, 35), 35) + "ch",
                        //this is how u control the textbox width, u can just put 35
                      }}
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Write your bio here!"
                      maxLength="200"
                    />
                  </div>
                </div>
                <div className={styles.aboutMeButton}>
                  <div className={styles.referralButtonSpace}>
                    <div onClick={updateAll} className={styles.referralButton}>
                      Update
                    </div>
                  </div>
                  <div className={styles.referralButtonSpace}>
                    <div
                      onClick={updateEditTrue}
                      className={styles.referralButton}
                    >
                      Cancel
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default AboutMe;
