import React from "react";
import style from "./header.module.css";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Posts from "../Posts/Posts";
import SignIn from "../AuthForm/AuthForm";
import SignUp from "../RegistrationForm/RegistrationForm";

function Header() {
  return (
    <>
      <Router>
        <div className={style.header}>
          <nav className={style.nav}>
            <Link to="/">Main page</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>
        </div>

        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/blog" component={Posts} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default Header;
