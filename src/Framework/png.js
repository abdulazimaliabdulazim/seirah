// import html2canvas from "html2canvas";
import { toPng } from "html-to-image";

const dawnloadImg = (ref, name) => {
  toPng(ref)
    .then((dataUrl) => {
      window.localStorage.setItem("img", dataUrl);
      const link = document.createElement("a");
      link.download = name;
      link.href = dataUrl;
      link.click();
    })
    .catch((err) => console.log(err));
};

export default dawnloadImg;

// console.log(ref);
// html2canvas(ref).then((canvas) => {
//   const img = canvas.toDataURL(ref);
//   const a = document.createElement("a");
//   a.setAttribute("href", img);
//   a.setAttribute("download", "abdo");
//   a.click();
//   a.remove();
// });
