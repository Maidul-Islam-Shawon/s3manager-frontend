 //Retrievesanctions
//   const retrievesanctions = async () => {
//     const response = await api.get("/sanctions");
//     return response.data;
//   };
import api from "../api/common-http";
class SanctionService{
   async  addSanctionHandler (sanction) {
        const request = {
          ...sanction,
        };
        try {
            var response = await api.post("create-sanction-list", request);
            if(response == 1) {
                console.log("adding sanction data");
                console.log(response);
            }
            
        } catch (error) {
            console.log(error);
            throw error;
        }
       // setSanctions([...sanctions, response.data]);
    };
}
export default new SanctionService();

//   export default addSanctionHandler = async (sanction) => {
//     const request = {
//       ...sanction,
//     };
//     const response = await api.post("/sanctions", request);
//     console.log("adding sanction data");
//     console.log(response);
//     setSanctions([...sanctions, response.data]);
//   };

//   const updateSanctionHandler = async (sanction) => {
//     const response = await api.put(`/sanctions/${sanction.id}`, sanction);
//     const { id, name, email } = response.data;
//     setSanctions(
//       sanctions.map((sanction) => {
//         return sanction.id === id ? { ...response.data } : sanction;
//       })
//     );
//   };

//   const removeSanctionHandler = async (id) => {
//     await api.delete(`/sanctions/${id}`);
//     const newsanctionList = sanctions.filter((sanction) => {
//       return sanction.id !== id;
//     });

//     setSanctions(newsanctionList);
//   };

//   const getAllsanctions = async () => {
//     const allsanctions = await retrievesanctions();
//     if (allsanctions) setSanctions(allsanctions);
//   };
  