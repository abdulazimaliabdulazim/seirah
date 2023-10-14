import React, { Fragment } from "react";
import hendlerData from "../Form/Pages/hendlerData/hendlerData";
import img from "../../images/user.png";

const UserImg = ({
  hidden = false,
  width = "70px",
  radius = "0",
  srcImg,
  setState,
}) => {
  // Get Image In Users
  const uploadImage = (e) => {
    const upload = document.createElement("input");
    upload.type = "file";
    upload.accept = ".jpg";
    upload.click();
    upload.onchange = () => {
      const newFiles = new FileReader();
      newFiles.readAsDataURL(upload.files[0]);
      newFiles.onload = () => {
        hendlerData(e, setState, false, false, false, false, newFiles.result);
      };
    };
  };
  // Check For Image
  const checkForImg = () => {
    if (srcImg === "" || srcImg === undefined) {
      return img;
    } else return srcImg;
  };
  return (
    <Fragment>
      <img
        style={{
          width: width,
          height: width,
          borderRadius: radius,
        }}
        src={checkForImg()}
        alt="img"
      />
      {hidden && (
        <button onClick={(e) => uploadImage(e)} type="button">
          تغيير الصورة
        </button>
      )}
    </Fragment>
  );
};

export default UserImg;
