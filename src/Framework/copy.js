const copy = (event) => {
  var range = document.createRange();
  range.selectNodeContents(event);
  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  selection.removeAllRanges();
  document.execCommand("paste");
};
export default copy;
// const Copy = (props) => {
//   const [copy, setCopy] = useState("");
//   const [chCopy, setchCopy] = useState([]);

//   return (
//     <div
//       style={{ display: "flex", justifyContent: "space-around" }}
//       className="framwork">
//       <div>
//         <input
//           style={{ padding: "5px", marginTop: "20px" }}
//           value={copy}
//           onChange={(e) => setCopy(e.target.value)}
//         />

//         <CopyToClipboard text={copy} onCopy={() => setchCopy({ copied: true })}>
//           <Button>Copy to clipboard with button</Button>
//         </CopyToClipboard>
//       </div>

//       {chCopy.copied ? <span style={{ color: "red" }}>Copied.</span> : null}
//       {props.children}
//     </div>
//   );
// };

// export default Copy;
