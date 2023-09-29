import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "../Layout/Button";

const Copy = (props) => {
  const [copy, setCopy] = useState("");
  const [chCopy, setchCopy] = useState([]);

  return (
    <div
      style={{ display: "flex", justifyContent: "space-around" }}
      className="framwork">
      <div>
        <input
          style={{ padding: "5px", marginTop: "20px" }}
          value={copy}
          onChange={(e) => setCopy(e.target.value)}
        />

        <CopyToClipboard text={copy} onCopy={() => setchCopy({ copied: true })}>
          <Button>Copy to clipboard with button</Button>
        </CopyToClipboard>
      </div>

      {chCopy.copied ? <span style={{ color: "red" }}>Copied.</span> : null}
      {props.children}
    </div>
  );
};

export default Copy;
