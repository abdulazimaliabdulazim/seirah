import React, { Fragment, useState } from "react";
import img from "../../images/user.png";

const UserImg = ({ hidden = false, width = "70px", radius = "0" }) => {
  const srcLocal = window.localStorage.getItem("src");
  const [scrIma, setScr] = useState(!srcLocal ? img : srcLocal);
  // Get Image In Users
  const uploadImage = () => {
    const upload = document.createElement("input");
    upload.type = "file";
    upload.click();
    upload.onchange = () => {
      const newFiles = new FileReader();
      newFiles.readAsDataURL(upload.files[0]);
      newFiles.onload = () => {
        setScr(newFiles.result);
        window.localStorage.setItem("src", newFiles.result);
      };
    };
  };
  return (
    <Fragment>
      <img
        style={{
          width: width,
          height: width,
          borderRadius: radius,
        }}
        src={scrIma}
        onLoad={(e) => setScr(e.target.src)}
        alt="img"
        id="thamnal"
      />
      {hidden && (
        <button onClick={uploadImage} type="button">
          تغيير الصورة
        </button>
      )}
    </Fragment>
  );
};

export default UserImg;
