import React, { useState, useEffect } from "react";
import "./App.css";

import "semantic-ui-css/semantic.min.css";

import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Grid from "./components/grid/Grid";

function App() {
  const [callbackJson, setCallbackJson] = useState("");
  const [toast, setToast] = useState("")
  

  return (
    <div className="App">
      <div className="header">
        <Header toast={toast}/>
      </div>
      <div className="form">
        <Form setToast={setToast} setCallbackJson={setCallbackJson}/>
      </div>
      <div className="grid">
        <Grid callbackJson={callbackJson}/>
      </div>
    </div>
  );
}

export default App;
