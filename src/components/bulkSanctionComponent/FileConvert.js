import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FileFormat } from "./FileFormat";
import XLSX from "xlsx";
import { ColumnBuilder } from "./ColumnBuilder";
import FilePost from "./FilePost";

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
  //console.log(state);

  const handleFile = () => {
    //debugger;
    if (!state.file) {
      console.log("no file attached");
      return;
    }

    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const readAsBinaryString = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      /* Parse data */
      const binaryString = e.target.result;
      const wb = XLSX.read(binaryString, {
        type: readAsBinaryString ? "binary" : "array",
        bookVBA: true,
      });

      /* Get first worksheet */
      const wsname = wb.SheetNames[1];
      const ws = wb.Sheets[wsname];

      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws, { defval: "" });

      /* Update state */
      setState({ data: data, cols: ColumnBuilder(ws["!ref"]) });
    };

    if (readAsBinaryString) {
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
        accept={FileFormat}
        onChange={handleChange}
      />
      <br />
      <input type="submit" value="Upload" onClick={handleFile} />
      {/* <input type="submit" value="Submit" onClick={handlePost} /> */}
      <hr />
      <FilePost ExcelData={state.data} />
    </Container>
  );
};

export default FileConvert;
