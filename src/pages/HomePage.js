import React, { useState } from "react";
import HomeText from "../components/homeComponents/HomeText";

const HomePage = () => {
  // const [state, setState] = useState([]);
  // let list = [];
  // const jsonData = [
  //   {
  //     Id: 1,
  //     Name: "Master To",
  //     Address: "Dhaka",
  //   },
  //   {
  //     Id: 2,
  //     Name: "Shawon",
  //     Address: "Dhaka",
  //   },
  //   {
  //     Id: 3,
  //     Name: "Tester",
  //     Address: "Dhaka",
  //   },
  // ];

  // const handlePost = (e) => {
  //   e.preventDefault();
  //   //jsonData.map((a) => setState(...state, [a.Name]));
  //   //jsonData.map((x) => setState({ data: x }));
  //   jsonData.filter((x) => list.push({ name: x.Name, Address: x.Address }));
  //   setState(list);
  // };
  // console.log(state);
  // // console.log(
  // //   "result:",
  // //   state.map((x) => x)
  // // );

  return (
    <>
      <HomeText />
    </>
  );
};

export default HomePage;
