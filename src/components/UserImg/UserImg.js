import React, { Fragment } from "react";
import img from "../../images/user.png";
import { handleInputChange } from "../Form/Pages/Qualifications/Home/Qualifications";

const UserImg = ({
  state,
  setState,
  index,
  hidden = false,
  width = "70px",
  radius = "0",
}) => {
  // Get Image In Users
  const uploadImage = () => {
    const upload = document.createElement("input");
    upload.type = "file";
    upload.accept = ".jpg";
    upload.click();
    upload.onchange = () => {
      const newFiles = new FileReader();
      newFiles.readAsDataURL(upload.files[0]);
      newFiles.onload = () => {
        handleInputChange(index, newFiles.result, "image", state, setState);
      };
    };
  };
  // Check For Image
  const checkForImg = () => {
    if (state !== undefined) {
      if (state[index].image === "" || state[index].image === undefined) {
        return img;
      } else return state[index].image;
    }
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
        <button onClick={uploadImage} type="button">
          تغيير الصورة
        </button>
      )}
    </Fragment>
  );
};

export default UserImg;
