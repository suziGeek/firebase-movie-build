import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
// import { SignUpLink } from "../SignUp";
import SignOutButton from "../SignOut";
import { AuthUserContext } from "../Session";

const Navigation = () => (
  <div className='menu-align'>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);
const NavigationAuth = () => (
  <ul id='top-menu'>
    <li>
      <Link to={ROUTES.LANDING}>Movies</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);
const NavigationNonAuth = () => (
  <ul id='top-menu'>
    <li>
      <Link to={ROUTES.LANDING}>Movies</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>
        <button>Sign In</button>
      </Link>
    </li>
  </ul>
);
export default Navigation;
