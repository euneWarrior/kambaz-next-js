import {FormControl, FormSelect} from "react-bootstrap";
import Link from "next/link";
export default function Signup() {
  return (
    <div id="wd-signin-screen">
      <h1>Signup</h1>
      <FormControl id="wd-username"
	    placeholder="yesyes"
             defaultValue="sean"
             className="mb-2"/>
      <FormControl id="wd-password"
             placeholder="password" type="password"
	     defaultValue = "yepyep"
             className="mb-2"/>
	<FormControl id="wd-firstname"
             placeholder="Sean"
             className="mb-2"/>
      <FormControl id="wd-lastname"
             placeholder="Lakes" type="password"
             className="mb-2"/>
	<FormControl type = "date" id="wd-DOB"
             placeholder="2003-06-05"
             className="mb-2"/>
      <FormControl id="wd-email"
             placeholder="sean@lakes" type="email"
             className="mb-2"/>
	<FormSelect id="wd-role">
     <option value="STUDENT" defaultChecked>Student</option>
     <option value="FACULTY">Faculty</option>
     <option value="ADMIN">Admin</option>
     <option value="USER">User</option>
	</FormSelect>
      <Link id="wd-signin-link" href="Signin">Sign out</Link>
    </div> );}