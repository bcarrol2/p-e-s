import React, { Fragment } from "react";
import InputClient from "./components/InputClient";
import ListClients from "./components/ListClients";
import InputDeveloper from "./components/InputDeveloper";
import ListDevelopers from "./components/ListDevelopers";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputClient />
        <ListClients />
        <InputDeveloper />
        <ListDevelopers />
      </div>
    </Fragment>
  );
}

export default App;