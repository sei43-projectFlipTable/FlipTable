import { Box } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import styles from "./css/AboutMe.module.css";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";

const AboutMe = () => {
  const [editing, setEditing] = useState(false);
  const [inputText, setInputText] = useState("");
  const userCtx = useContext(UserContext);
  const [userBio, setUserBio] = useState();

  const getUserBio = async () => {
    try {
      const { ok, data } = await fetchData(
        "/user",
        userCtx.accessToken,
        "POST",
        {
          id: userCtx.payload.id,
        }
      );

      if (ok) {
        setUserBio(data.aboutMe);
      } else throw new Error(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const updateUserBio = async () => {
    try {
      const { ok, data } = await fetchData(
        "/user",
        userCtx.accessToken,
        "PATCH",
        {
          id: userCtx.payload.id,
          aboutMe: inputText,
        }
      );

      if (ok) {
        alert("About me updated");
        setEditing(false);
        getUserBio();
        setInputText();
      } else {
        throw new Error(data);
      }
    } catch (error) {
      alert("error updating about me");
    }
  };

  const openUpdateBox = () => {
    setEditing(true);
  };

  const closeUpdateBox = () => {
    setEditing(false);
    setInputText();
  };

  useEffect(() => {
    getUserBio();
  }, [userCtx.accessToken]);

  return (
    <>
      <div className={styles.homePageScroll}>
        {editing ? (
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
                        width: 35 + "ch",
                        //this is how u control the textbox width, u can just put 35
                      }}
                      type="text"
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Write your bio here!"
                      // maxLength="200"
                    />
                  </div>
                </div>
                <div className={styles.aboutMeButton}>
                  <div className={styles.referralButtonSpace}>
                    <div
                      onClick={updateUserBio}
                      className={styles.referralButton}
                    >
                      Update
                    </div>
                  </div>
                  <div className={styles.referralButtonSpace}>
                    <div
                      onClick={closeUpdateBox}
                      className={styles.referralButton}
                    >
                      Cancel
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.referralComponentSpace}>
            <div className={styles.referralHeaderSpace}>
              <div className={styles.referralHeaderTextSpace}>
                <div className={styles.referralHeaderText}>About Me</div>
              </div>
            </div>
            <div onClick={openUpdateBox} className={styles.referralBodySpace}>
              <div className={styles.referralBodyDescriptionSpace}>
                <div className={styles.referralBodyDescription}>{userBio}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default AboutMe;
