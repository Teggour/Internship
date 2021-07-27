import React from "react";
import "./App.css";

import AuthorizationForm from "./components/AuthForm/AuthForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import PostForm from "./components/PostForm/PostForm";
import Posts from "./components/Posts/Posts";
import FullPost from "./components/FullPost/FullPost";
import ProfileUser from "./components/ProfileUser/ProfileUser"

function App() {
  return (
    <React.Fragment>
      <PostForm postId="61001d8ae43fc000154aaca6" postTitle="check" postDescription="check1" postText="check2check2check2check2check2" />
      <PostForm />
      <AuthorizationForm />
      <RegistrationForm />
      <ProfileUser id="60643927ee65b6ffbe6c2a5b"/>
      <FullPost postId="60cb450db4c69c0015c48173" /> 
      <Posts />
    </React.Fragment>
  );
}

export default App;
