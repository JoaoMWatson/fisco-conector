import React, { useState, useEffect } from "react";
import "./Conector.css";

import "semantic-ui-css/semantic.min.css";

import Header from "../../components/header/Header";
import Form from "../../components/form/Form";
import Grid from "../../components/grid/Grid";

export default function Conector() {
  const [callbackJson, setCallbackJson] = useState("");

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="form">
        <Form setCallbackJson={setCallbackJson} />
      </div>
      <div className="grid">
        <Grid callbackJson={callbackJson} />
      </div>
    </div>
  );
}
