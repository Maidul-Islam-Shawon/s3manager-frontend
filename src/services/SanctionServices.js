import Axios from "axios";
import { SERVER_URL } from "../utils/ServerUrl";

// export default {
//   getSanctionList: async function () {
//     try {
//       const response = await Axios.get(SERVER_URL + "SanctionType");
//       return response.data;
//     } catch (err) {
//       throw err;
//     }
//   },
// };

export const GetSanctionList = () => {
  try {
    const response = Axios.get(SERVER_URL + "SanctionType");
    return response;
  } catch (err) {
    throw err;
  }
};

export const PostSenctionBulkList = (convertedExcelData) => {
  try {
    console.log(convertedExcelData);
    const response = Axios.post(
      SERVER_URL + "Sanction/create-sanction-bulk-list",
      convertedExcelData
    );
    //console.log(response);
    return response;
  } catch (err) {
    throw err;
  }
};
