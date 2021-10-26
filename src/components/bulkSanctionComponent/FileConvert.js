import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { SheetJSFT } from "./FileTypes";
import XLSX from "xlsx";
import { make_cols } from "./ColumnBuilder";

const FileConvert = () => {
  const [state, setState] = useState({
    file: {},
    data: [],
    cols: [],
  });

  const handleChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      setState({ file: files[0] });
    }
  };

  const handleFile = () => {
    //debugger;
    if (!state.file) {
      console.log("no file attached");
      return;
    }

    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const RaBS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: RaBS ? "binary" : "array",
        bookVBA: true,
      });

      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];

      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws, { defval: "" });

      /* Update state */
      setState({ data: data, cols: make_cols(ws["!ref"]) });
    };

    if (RaBS) {
      reader.readAsBinaryString(state.file);
    } else {
      reader.readAsArrayBuffer(state.file);
    }
  };

  console.log(state.data);

  return (
    <Container>
      <h2 style={{ marginTop: "80px" }}>File Convert</h2>
      <hr />

      <label htmlFor="file">Upload an excel to Process Triggers</label>
      <br />
      <input
        type="file"
        className="form-control"
        id="file"
        accept={SheetJSFT}
        onChange={handleChange}
      />
      <br />
      <input type="submit" value="Process Triggers" onClick={handleFile} />
    </Container>
  );
};

export default FileConvert;
