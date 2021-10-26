import React, { useEffect, useState } from "react";
import {
  convertDate,
  getIdentificationTypeID,
  getsanctionTypeID,
} from "../../utils/ExcelUploadValidation";

const FilePost = ({ ExcelData }) => {
  const [state, setState] = useState([]);
  // const [state, setState] = useState([
  //   {
  //     sanctionPartyType: 0,
  //     name: "",
  //     otherName: "",
  //     dateOfBirth: "",
  //     nationality: "",
  //     address: "",
  //     identificationType: 0,
  //     identificationNumber: "",
  //     sanctionTypeId: 0,
  //     sanctionDetails: "",
  //     sanctionDate: "",
  //     sanctionExpiration: "",
  //   },
  // ]);

  let list = [];

  const [validData, SetValidData] = useState([]);
  const [invalidData, SetInvalidData] = useState([]);

  const handlePost = (e) => {
    e.preventDefault();

    ExcelData.filter((x) =>
      list.push({
        sanctionPartyType: "",
        name: x.Surname || x.Institution,
        otherName: x["Other Name(s)"] || x.ADDRESS,
        dateOfBirth: x["DATE OF BIRTH"]
          ? convertDate(x["DATE OF BIRTH"])
          : null,
        nationality: x.NATIONALITY ? x.NATIONALITY : null,
        address: x["BUSINESS REG NUMBER"] ? x["BUSINESS REG NUMBER"] : "",
        identificationType: getIdentificationTypeID(x["ID TYPE"]),
        identificationNumber: x["ID NUMBER"] || null,
        sanctionTypeId:
          getsanctionTypeID(x["Santion Type"]) ||
          getsanctionTypeID(x["Sanction Type"]),
        sanctionDetails: x["SANCTION DETAIL"] || x["SANCTION Details"],
        sanctionDate: convertDate(x["SANCTION DATE"]),
        sanctionExpiration: convertDate(x["SANCTION EXPIRATION"]),
      })
    );
    setState(list);
  };

  console.log("states:", state);

  return (
    <div>
      <h2>File Post</h2>
      <input type="submit" value="Submit" onClick={handlePost} />
    </div>
  );
};

export default FilePost;
