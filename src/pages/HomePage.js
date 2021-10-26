import React, { useState } from "react";
import HomeText from "../components/homeComponents/HomeText";

const HomePage = () => {
  const [state, setState] = useState([]);
  const jsonData = [
    {
      Id: 1,
      Name: "Master To",
      Address: "Dhaka",
    },
    {
      Id: 2,
      Name: "Shawon",
      Address: "Dhaka",
    },
    {
      Id: 3,
      Name: "Tester",
      Address: "Dhaka",
    },
  ];

  const handlePost = (e) => {
    e.preventDefault();
    jsonData.map((a) => setState(...state, [a.Name]));
  };

  console.log("result:", state);

  return (
    <>
      <input type="submit" value="Submit" onClick={handlePost} />

      {jsonData.map((a) => (
        <div>{a.Name}</div>
      ))}
      <hr />
      <HomeText />
    </>
  );
};

export default HomePage;
