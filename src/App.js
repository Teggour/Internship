import React from "react";
import "./App.css";

import AuthorizationForm from "./components/AuthForm/AuthForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Posts from "./components/Posts/Posts";
import FullPosts from "./components/FullPost/FullPost";

function App() {
  return (
    <React.Fragment>
      <AuthorizationForm />
      <RegistrationForm />
      <Posts />
      <FullPosts postId="60cb450db4c69c0015c48173" />
    </React.Fragment>
  );
}

export default App;
