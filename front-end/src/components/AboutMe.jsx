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
    if (userCtx.accessToken != "") {
      getUserBio();
    }
  }, [userCtx.accessToken]);

  return (
    <>
      <div className={styles.aboutMeComponentSpace}>
        {editing ? (
          <div className={styles.titleAndInputBox}>
            <div className={styles.title}>About Me</div>
            <div className={styles.inputBoxEditable}>
              <div className={styles.referralBodyDescription}>
                <textarea
                  className={styles.noborder}
                  type="text"
                  style={{ height: "100px" }}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Write your bio here!"
                  // maxLength="200"
                />
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
        ) : (
          <div className={styles.titleAndInputBox}>
            <div className={styles.title}>About Me</div>
            <div onClick={openUpdateBox} className={styles.inputBox}>
              <div className={styles.referralBodyDescription}>{userBio}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default AboutMe;
