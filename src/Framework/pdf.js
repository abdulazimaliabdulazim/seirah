import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const dawnload = (pdfRef, name) => {
  const input = pdfRef.current;
  html2canvas(input).then((canvas) => {
    const imgDate = canvas.toDataURL();
    const pdf = new jsPDF();
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imWidth = canvas.width;
    const imHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imWidth, pdfHeight / imHeight);
    const imgX = (pdfWidth - imWidth * ratio) / 2;
    const imgY = 30;
    pdf.addImage(imgDate, "PNG", imgX, imgY, imWidth * ratio, imHeight * ratio);
    pdf.save(name);
  });
};

export default dawnload;
