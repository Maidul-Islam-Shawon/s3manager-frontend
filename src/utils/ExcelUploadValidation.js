/* ...Convert from Excel Date format... */
export const convertDate = (excelDate) => {
  var date = new Date(Math.round((excelDate - (25567 + 1)) * 86400 * 1000));
  var converted_date = date.toISOString().split("T")[0];
  return converted_date;
};

/* ...Convert SanctionType Name to ID... */
export const getsanctionTypeID = (IdentificationType) => {
  switch (IdentificationType) {
    case "Deny Withdrawal":
      return 1;
    case "Deny Accout Creation":
      return 2;
    case "Deny Customer Creation":
      return 3;
    case "Reject Cheques":
      return 4;
    case "Deny Loan":
      return 5;
    default:
      return 0;
  }
};

export const getIdentificationTypeID = (IdentificationType) => {
  switch (IdentificationType) {
    case "National ID":
      return 1;
    case "Voter ID":
      return 2;
    case "NHIS":
      return 3;
    case "Driver Licencse":
      return 4;
    case "Passport":
      return 5;
    default:
      return 0;
  }
};
