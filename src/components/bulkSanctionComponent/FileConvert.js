import React, { useState } from "react";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
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

  const [success, isSuccess] = useState(false);
  const [fileUploaded, isFileUploaded] = useState(false);
  const [sanctionPartyTypeValue, setSanctionPartyTypeValue] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      setState({ file: files[0] });
      isFileUploaded(true);
      setErrorMessage();
      isSuccess(false);
    }
  };
  //console.log(state);

  const handleFile = () => {
    if (sanctionPartyTypeValue === 0) {
      setErrorMessage("Please select a file type");
      return;
    }
    //debugger;
    if (!fileUploaded) {
      console.log("no file attached");
      setErrorMessage("No File Attached or Expired!");
      return;
    }
    setErrorMessage();
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
      if (wb.SheetNames[1]) {
        console.log("Please upload Excel file with single sheet");
        setErrorMessage("Please upload Excel file with single sheet!");
        return;
      }
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];

      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws, { defval: "" });

      /* Update state */
      setState({ data: data, cols: ColumnBuilder(ws["!ref"]) });
      isSuccess(true);
      isFileUploaded(false);
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
      <Row>
        <Col>
          <div className="fileConvert-body">
            <h2 style={{ marginTop: "80px", textAlign: "center" }}>
              Bulk Upload
            </h2>
            <hr />
            <h6>Upload an Excel File</h6>
            <Row>
              <Col md={10}>
                <Form.Group controlId="formFileLg" className="mb-3">
                  <Form.Control
                    type="file"
                    accept={FileFormat}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Select
                  aria-label="Default select example"
                  size="lg"
                  onChange={(e) =>
                    setSanctionPartyTypeValue(parseInt(e.target.value))
                  }
                >
                  <option>Select File Type...</option>
                  <option value="1">Individual</option>
                  <option value="2">Corporate</option>
                </Form.Select>
              </Col>
            </Row>

            <Button
              variant="primary"
              type="submit"
              onClick={handleFile}
              value="Upload"
            >
              Upload
            </Button>

            <br />

            <hr />
            {success ? (
              <>
                <FilePost
                  ExcelData={state.data}
                  SanctionPartyTypeValue={sanctionPartyTypeValue}
                />
                <hr />
              </>
            ) : (
              <div></div>
            )}

            {errorMessage ? (
              <Alert variant="danger">{errorMessage}</Alert>
            ) : (
              <div></div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FileConvert;
