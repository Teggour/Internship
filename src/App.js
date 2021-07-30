import React from "react";
import "./App.css";

import AuthorizationForm from "./components/AuthForm/AuthForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import PostForm from "./components/PostForm/PostForm";
import Posts from "./components/Posts/Posts";
import FullPost from "./components/FullPost/FullPost";
import ProfileUser from "./components/ProfileUser/ProfileUser"
import Header from "./components/Header/Header"

function App() {
  return (
    <React.Fragment>
      <Header/>
      {/* <PostForm postId="61001d8ae43fc000154aaca6" postTitle="check" postDescription="check1" postText="check2check2check2check2check2" />
      <PostForm />
      <Posts /> */}
    </React.Fragment>
  );  
}

export default App;
