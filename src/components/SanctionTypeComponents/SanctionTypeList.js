import React, { useEffect, useState } from "react";
import SanctionTypeCard from "./SanctionTypeCard";
import { Container, Spinner } from "react-bootstrap";
import { GetSanctionList } from "../../services/SanctionServices";

const SanctionTypeList = () => {
  const [state, setState] = useState({
    loading: false,
    sanctionTypeData: [],
    hasError: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    //debugger;
    GetSanctionList()
      .then((res) => {
        setState({
          sanctionTypeData: res.data,
          loading: false,
          hasError: false,
        });
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
  }, []);

  // console.log(state.sanctionTypeData);

  function renderSanctionTypeData() {
    if (state.loading)
      return (
        <div className="loadingSpinner">
          <Spinner animation="border" variant="primary" />
        </div>
      );
    if (state.hasError)
      return (
        <div className="errorMessage">
          <b>Error:</b> {errorMessage}!
        </div>
      );
    return <SanctionTypeCard sanctionTypeData={state.sanctionTypeData} />;
  }

  return (
    <Container>
      <SanctionTypeCard />
      {renderSanctionTypeData()}
    </Container>
  );
};

export default SanctionTypeList;
