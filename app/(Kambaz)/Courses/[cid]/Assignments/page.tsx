'use client';
import Link from "next/link";
import {Form, FormLabel, ListGroup, ListGroupItem} from "react-bootstrap";
import {BsGripVertical} from "react-icons/bs";
import {MdAssignment} from "react-icons/md";
import AssignmentControlButtons from "../Assignments/AssignmentControlButtons";
import AssignmentButtons from "./AssignmentButtons";
import AssignmentTopButtons from "./AssignmentTopButtons";
import { useParams } from "next/navigation";
import { assignments } from "../../../Database"
import { useSelector } from "react-redux";
export default function Assignments() {
  const { cid } = useParams();
const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
	return (
	
    <div id="wd-assignments">
{currentUser?.role == "FACULTY" && (
<AssignmentTopButtons id = {cid}/>) }
<br /> 
  <ListGroup className="rounded-0" id="wd-assignments">
	      <div className="wd-title p-3 ps-2 bg-secondary"> 
        <BsGripVertical className="me-2 fs-3" /> Assignments <AssignmentButtons />
	<ListGroupItem id = "wd-cornered-grade" className = "float-end p-1"> <FormLabel
	className = "align-midde fs-5"> 40% of total</FormLabel></ListGroupItem>

	 </div>
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
	{assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (

      <ListGroup key = ""className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-5 ps-1">
          <BsGripVertical className="me-2 fs-3" /> 
	  <MdAssignment className="me-2 fs-3" />
	  {currentUser?.role == "FACULTY" && (
		<Link href = {`Assignments/${assignment._id}`} id = "wd-assignment-titles">
		{assignment.title}
		</Link>)}
		{currentUser?.role != "FACULTY" && assignment.title}
		 <br /> 

		<Form.Group className="justify-content-left">
		<Form.Label  id = "wd-module-count">
		Multiple Modules
		</Form.Label>
		<Form.Label class = "fw-bold" id = "wd-available-until-text">
		&nbsp; | Not Available until  
		</Form.Label>&nbsp;
		<Form.Label id = "wd-available-until-text">
		{assignment.available} |
		</Form.Label>
		
		 <br />
		 {currentUser?.role == "FACULTY" &&
		(<AssignmentControlButtons assignmentId= {assignment._id}/>)}
		<Form.Label class = "fw-bold" id = "wd-due-date-text">
		Due &nbsp;
		</Form.Label> 
		<Form.Label id = "wd-due-date-text">
		{assignment.due} | {assignment.points} points
		</Form.Label> 
		
		</Form.Group>

		
	  </ListGroupItem>
      </ListGroup>))}
    </ListGroupItem>
  </ListGroup>

    </div>
);}