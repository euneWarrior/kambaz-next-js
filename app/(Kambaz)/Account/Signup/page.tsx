import {FormControl} from "react-bootstrap";
import Link from "next/link";
export default function Signup() {
  return (
    <div id="wd-signin-screen">
      <h1>Signup</h1>
      <FormControl id="wd-username"
             placeholder="username"
             className="mb-2"/>
      <FormControl id="wd-password"
             placeholder="password" type="password"
             className="mb-2"/>
      <Link id="wd-signup-btn"
            href="/Account/Profile"
            className="btn btn-primary w-100 mb-2">
            Sign up </Link>
      <Link id="wd-signin-link" href="/Account/Signin">Sign in</Link>
    </div> );}