import { Alert, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { ExportToExcel } from "../../utils/ExcelUploadValidation";
import { PostSenctionBulkList } from "../../services/SanctionServices";
import { IndividualSanctionParty } from "./IndividualSanctionParty";
import { CorporateSanctionParty } from "./CorporateSanctionParty";

const FilePost = ({ ExcelData, SanctionPartyTypeValue }) => {
  const [state, setState] = useState([]);
  const [invalidState, SetInvalidState] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorlist, setErrorList] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let result;
    if (SanctionPartyTypeValue === 1) {
      result = IndividualSanctionParty(ExcelData);
      setState(result.validDataset);
      SetInvalidState(result.invalidDataset);
      setMessage();
    } else if (SanctionPartyTypeValue === 2) {
      result = CorporateSanctionParty(ExcelData);
      setState(result.validDataset);
      SetInvalidState(result.invalidDataset);
      setMessage();
    } else {
      setErrorMessage(
        "Something went wrong! Please contact with Administrator"
      );
    }
  }, []);

  console.log("valid states:", state);
  console.log("invalid states:", invalidState);

  const handlePost = (e) => {
    e.preventDefault();

    PostSenctionBulkList(state)
      .then((res) => {
        console.log(res);
        setMessage("File Uploaded Succefully");
      })
      .catch((err) => setErrorList(err.response.data));
  };

  return (
    <div>
      <h2>File Post</h2>
      <Button variant="success" type="submit" onClick={handlePost}>
        Submit
      </Button>
      &nbsp;&nbsp;
      {invalidState.length > 0 ? (
        <Button
          type="button"
          variant="outline-info"
          onClick={ExportToExcel(invalidState)}
        >
          Download Invalid Data
        </Button>
      ) : (
        ""
      )}
      {message ? (
        <>
          <br />
          <br />
          <Alert variant="success">{message}</Alert>
        </>
      ) : (
        <div></div>
      )}
      {errorMessage ? (
        <>
          <br />
          <br />
          <Alert variant="danger">{errorMessage}</Alert>
        </>
      ) : (
        <div></div>
      )}
      {errorlist ? (
        <>
          <br />
          <br />
          {errorlist.map((err) => (
            <Alert variant="danger">{err.Message}</Alert>
          ))}
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default FilePost;
