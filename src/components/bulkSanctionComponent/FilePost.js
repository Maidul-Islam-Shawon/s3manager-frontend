import { Alert, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import {
  convertDate,
  ExportToExcel,
  getIdentificationTypeID,
  getsanctionTypeID,
} from "../../utils/ExcelUploadValidation";
import { PostSenctionBulkList } from "../../services/SanctionServices";

const FilePost = ({ ExcelData }) => {
  const [state, setState] = useState([]);
  const [invalidState, SetInvalidState] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  let validDataset = [];
  let invalidDataset = [];

  useEffect(() => {
    ExcelData.filter((x) =>
      getsanctionTypeID(x["Santion Type"]) > 0 &&
      getsanctionTypeID(x["Santion Type"]) < 7 &&
      getIdentificationTypeID(x["ID TYPE"]) > 0 &&
      getIdentificationTypeID(x["ID TYPE"]) < 7
        ? validDataset.push({
            SanctionPartyType: 1,
            Name: x.Surname || x.Institution,
            OtherName: x["Other Name(s)"] || x.ADDRESS,
            DateOfBirth: x["DATE OF BIRTH"]
              ? convertDate(x["DATE OF BIRTH"])
              : null,
            Nationality: x.NATIONALITY ? x.NATIONALITY : null,
            Address: x["BUSINESS REG NUMBER"] ? x["BUSINESS REG NUMBER"] : "",
            IdentificationType: getIdentificationTypeID(x["ID TYPE"]),
            IdentificationNumber: x["ID NUMBER"] || null,
            SanctionTypeId:
              getsanctionTypeID(x["Santion Type"]) ||
              getsanctionTypeID(x["Sanction Type"]),
            SanctionDetails: x["SANCTION DETAIL"] || x["SANCTION Details"],
            SanctionDate: convertDate(x["SANCTION DATE"]),
            SanctionExpiration: convertDate(x["SANCTION EXPIRATION"]),
          })
        : invalidDataset.push({
            SanctionPartyType: 1,
            Name: x.Surname || x.Institution,
            OtherName: x["Other Name(s)"] || x.ADDRESS,
            DateOfBirth: x["DATE OF BIRTH"]
              ? convertDate(x["DATE OF BIRTH"])
              : null,
            Nationality: x.NATIONALITY ? x.NATIONALITY : null,
            Address: x["BUSINESS REG NUMBER"] ? x["BUSINESS REG NUMBER"] : "",
            IdentificationType: x["ID TYPE"],
            IdentificationNumber: x["ID NUMBER"] || null,
            SanctionTypeId: x["Santion Type"] || x["Sanction Type"],
            SanctionDetails: x["SANCTION DETAIL"] || x["SANCTION Details"],
            SanctionDate: convertDate(x["SANCTION DATE"]),
            SanctionExpiration: convertDate(x["SANCTION EXPIRATION"]),
          })
    );
    setState(validDataset);
    SetInvalidState(invalidDataset);
  }, []);

  console.log("valid states:", state);
  console.log("invalid states:", invalidState);

  const handlePost = (e) => {
    e.preventDefault();

    PostSenctionBulkList(state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) =>
        err.message !== ""
          ? setState({
              sanctionTypeData: [],
              loading: false,
              hasError: true,
            })
          : setErrorMessage(err.message)
      );
  };

  return (
    <div>
      <h2>File Post</h2>
      <Button variant="success" type="submit" onClick={handlePost}>
        Submit
      </Button>
      &nbsp;&nbsp;
      {invalidState ? (
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
      {errorMessage ? (
        <Alert variant="danger">{errorMessage}</Alert>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default FilePost;
