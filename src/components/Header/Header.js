import React from "react";
import style from "./header.module.css";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";
import Posts from "../Posts/Posts";
import FullPost from "../FullPost/FullPost";
import SignIn from "../AuthForm/AuthForm";
import SignUp from "../RegistrationForm/RegistrationForm";

import { ProtectedRoute } from "../../protectedRoutes/protectedRoute";
import ProfileUser from "../ProfileUser/ProfileUser";

function Header() {
  const currentUser = useSelector((state) => state.toolkit.currentUserId);
  // console.log(currentUser)

  return (
    <>
      <Router>
        <header className={style.header}>
          <nav className={style.nav}>
            <Link to="/">Main page</Link>
            {(!currentUser) ?
            <>
              <Link to="/signin">Sign In</Link> 
              <Link to="/signup">Sign Up</Link>
              </> 
              :
              <>
                <Link to="/profile">Profile</Link>
              </>
              }
          </nav>
        </header>

        <Switch>
          <Route exact path="/" component={Posts} />
          <ProtectedRoute exact path="/signin" component={SignIn} />
          <ProtectedRoute exact path="/signup" component={SignUp} />
          <Route exact path="/profile" component={ProfileUser} id={currentUser} />
        </Switch>
      </Router>
    </>
  );
}

export default Header;
