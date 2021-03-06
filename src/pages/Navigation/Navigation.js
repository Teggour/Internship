import React from "react";
import style from "./header.module.css";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Posts from "../Posts/Posts";
import FullPost from "../FullPost/FullPost";
import SignIn from "../AuthForm/AuthForm";
import SignUp from "../RegistrationForm/RegistrationForm";

import { UnAuthRoute } from "../../protectedRoutes/unAuthRoute";
import { AuthRoute } from "../../protectedRoutes/authRoute";
import UpdateProfileUser from "../UpdateProfileUser/UpdateProfileUser";
import ProfileUser from "../ProfileUser/ProfileUser";
import PostForm from "../PostForm/PostForm";

function Navigation() {
  const currentUser = useSelector((state) => state.toolkit.currentUserId);

  return (
    <>
      <Router>
        <header className={style.header}>
          <nav className={style.nav}>
            <Link to="/">Main page</Link>
            {!currentUser ? (
              <>
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
              </>
            ) : (
              <>
                <Link to={`/profile/${currentUser}`}>Profile</Link>
                <Link to={"/addpost"}>Add post</Link>
              </>
            )}
          </nav>
        </header>

        <Switch>
          <Route exact path="/" component={Posts} />
          <UnAuthRoute exact path="/signin" component={SignIn} />
          <UnAuthRoute exact path="/signup" component={SignUp} />
          <AuthRoute exact path="/profile/:userId" component={ProfileUser} />
          <AuthRoute
            exact
            path="/profile/:userId/edit"
            component={UpdateProfileUser}
          />
          <AuthRoute exact path="/addpost" component={PostForm} />
          <Route exact path="/post/:postId" component={FullPost} />
          <Route exact path="/post/:postId/edit" component={PostForm} />
        </Switch>
      </Router>
    </>
  );
}

export default Navigation;
