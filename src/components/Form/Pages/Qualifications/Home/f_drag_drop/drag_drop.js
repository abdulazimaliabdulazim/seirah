// Drag & Drop
let drag = null;
const dargItem = (item) =>
  item.addEventListener("dragstart", () => (drag = item));
// dargEnd
const dargEnd = (item) => item.addEventListener("dragend", () => (drag = null));
// dargOver
const dargOver = (item) =>
  item.addEventListener("dragover", (e) => e.preventDefault());
// drop
const drop = (item) => item.addEventListener("drop", () => item.append(drag));

export { dargItem, dargEnd, dargOver, drop };
