import React from "react";
import "./App.css";

import AuthorizationForm from "./components/AuthOrRegForm/AuthOrRegForm";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <React.Fragment>
      <AuthorizationForm formType={"Authorization"} />
      <Posts></Posts>
    </React.Fragment>
  );
}

export default App;
