// import html2canvas from "html2canvas";
import { toPng } from "html-to-image";

const dawnloadImg = (ref, name) => {
  toPng(ref)
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.download = name;
      link.href = dataUrl;
      link.click();
    })
    .catch((err) => console.log(err));
};

export default dawnloadImg;
