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
export default function Assignments() {
  const { cid } = useParams();

	return (
	
    <div id="wd-assignments">

<AssignmentTopButtons />
<br />
  <ListGroup className="rounded-0" id="wd-assignments">
	      <div className="wd-title p-3 ps-2 bg-secondary"> 
        <BsGripVertical className="me-2 fs-3" /> Assignments <AssignmentButtons />
	<ListGroupItem id = "wd-cornered-grade" className = "float-end p-1"> <FormLabel
	className = "align-midde fs-5"> 40% of total</FormLabel></ListGroupItem>

	 </div>
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
	{assignments
          .filter((assignment: Record<string, unknown>) => assignment.course === cid)
          .map((assignment: Record<string, unknown>) => (

      <ListGroup key = ""className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-5 ps-1">
          <BsGripVertical className="me-2 fs-3" /> 
	  <MdAssignment className="me-2 fs-3" />
	  
		<Link href = {`Assignments/${assignment._id}`} id = "wd-assignment-titles">
		{assignment.title}
		</Link> <br />

		<Form.Group className="justify-content-left">
		<Form.Label id = "wd-module-count">
		Multiple Modules
		</Form.Label>
		<Form.Label id = "wd-available-until-text">
		| Not Available Until May 6 at 12:00am |
		</Form.Label>  <br />
		<AssignmentControlButtons />
		<Form.Label id = "wd-due-date-text">
		Due May 12 at 11:59pm  |  100 pts
		</Form.Label> 
		</Form.Group>

		
	  </ListGroupItem>
      </ListGroup>))}
    </ListGroupItem>
  </ListGroup>

    </div>
);}