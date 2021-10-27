import {
  convertDate,
  getIdentificationTypeID,
  getsanctionTypeID,
} from "../../utils/ExcelUploadValidation";

export const IndividualSanctionParty = (ExcelData) => {
  let validDataset = [];
  let invalidDataset = [];

  ExcelData.filter((x) =>
    getsanctionTypeID(x["Santion Type"]) > 0 &&
    getsanctionTypeID(x["Santion Type"]) < 7 &&
    getIdentificationTypeID(x["ID TYPE"]) > 0 &&
    getIdentificationTypeID(x["ID TYPE"]) < 7 &&
    x["ID NUMBER"] !== "" &&
    x["SANCTION DETAIL"] !== "" &&
    x["SANCTION Details"] !== ""
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
          Surname: x.Surname || x.Institution,
          "Other Name(s)": x["Other Name(s)"] || x.ADDRESS,
          "DATE OF BIRTH": x["DATE OF BIRTH"]
            ? convertDate(x["DATE OF BIRTH"])
            : null,
          NATIONALITY: x.NATIONALITY ? x.NATIONALITY : null,

          "ID TYPE": x["ID TYPE"],
          "ID NUMBER": x["ID NUMBER"],
          "Santion Type": x["Santion Type"] || x["Sanction Type"],
          "SANCTION DETAIL": x["SANCTION DETAIL"] || x["SANCTION Details"],
          "SANCTION DATE": convertDate(x["SANCTION DATE"]),
          "SANCTION EXPIRATION": convertDate(x["SANCTION EXPIRATION"]),
        })
  );

  return { validDataset, invalidDataset };
};
