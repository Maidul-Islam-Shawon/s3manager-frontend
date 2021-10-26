import React, { useEffect, useState } from "react";

const FilePost = ({ ExcelData }) => {
  //console.log(ExcelData);
  const [exlData, setExlData] = useState(ExcelData);
  const [state, setState] = useState([
    {
      sanctionPartyType: 0,
      name: "",
      otherName: "",
      dateOfBirth: "",
      nationality: "",
      address: "",
      identificationType: 0,
      identificationNumber: "",
      sanctionTypeId: 0,
      sanctionDetails: "",
      sanctionDate: "",
      sanctionExpiration: "",
    },
  ]);

  const [test, setTest] = useState();

  const [validData, SetValidData] = useState([]);
  const [invalidData, SetInvalidData] = useState([]);

  //debugger;

  // useEffect(() => {
  //   if (ExcelData && ExcelData.length > 0) {
  //     ExcelData.filter((x) => setState([...state, x]));
  //   }
  // }, [ExcelData]);

  //debugger;

  const handlePost = (e) => {
    e.preventDefault();

    //console.log("state:", state);
    //ExcelData.map((x) => console.log("xasas", x.Surname));
    //ExcelData.map((x) => setState([...state, { name: x.Surname }]));
    //ExcelData.filter((x) => setState([...state, x]));
    //setState([...state, ...ExcelData]);

    //for(let)
    //debugger;
    // console.log(
    //   "Res",
    //   ExcelData.map((x) => setState([...state, { name: x.Surname }]))
    // );

    //let data = ExcelData.map((x) => x.Surname);
    //console.log(data);

    //setState(ExcelData.map((x) => x.Surname));

    debugger;
    //ExcelData.map((x) => setState([{ ...state, state.name: x.Surname }]));

    // for (let i of ExcelData) {
    //   //setState(...state, { name: i.Surname });
    //   console.log("i:", i.Surname);
    //   // setState((previousState) => ({
    //   //   myArray: [...previousState.myArray, i.Surname],
    //   // }));
    // }
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
