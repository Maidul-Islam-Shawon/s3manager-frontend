import {
  convertDate,
  getsanctionTypeID,
} from "../../utils/ExcelUploadValidation";

export const CorporateSanctionParty = (ExcelData) => {
  let validDataset = [];
  let invalidDataset = [];

  ExcelData.filter((x) =>
    getsanctionTypeID(x["Sanction Type"]) > 0 &&
    getsanctionTypeID(x["Sanction Type"]) < 7 &&
    x["SANCTION DETAIL"] !== "" &&
    x["SANCTION Details"] !== ""
      ? validDataset.push({
          SanctionPartyType: 2,
          Name: x.Surname || x.Institution,
          OtherName: null,
          DateOfBirth: null,
          Nationality: null,
          Address: x["ADDRESS"] ? x["ADDRESS"] : "",
          IdentificationType: 1,
          IdentificationNumber: x["BUSINESS REG NUMBER"]
            ? x["BUSINESS REG NUMBER"]
            : "",
          SanctionTypeId:
            getsanctionTypeID(x["Santion Type"]) ||
            getsanctionTypeID(x["Sanction Type"]),
          SanctionDetails: x["SANCTION DETAIL"] || x["SANCTION Details"],
          SanctionDate: convertDate(x["SANCTION DATE"]),
          SanctionExpiration: convertDate(x["SANCTION EXPIRATION"]),
        })
      : invalidDataset.push({
          Institution: x.Institution,
          ADDRESS: x.ADDRESS,
          "BUSINESS REG NUMBER": x["BUSINESS REG NUMBER"]
            ? x["BUSINESS REG NUMBER"]
            : "",
          "Sanction Type": x["Santion Type"] || x["Sanction Type"],
          "SANCTION DETAIL": x["SANCTION DETAIL"] || x["SANCTION Details"],
          "SANCTION DATE": convertDate(x["SANCTION DATE"]),
          "SANCTION EXPIRATION": convertDate(x["SANCTION EXPIRATION"]),
        })
  );

  return { validDataset, invalidDataset };
};
