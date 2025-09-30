'use client';
import Link from "next/link";
import {Form, FormLabel, ListGroup, ListGroupItem} from "react-bootstrap";
import {BsGripVertical} from "react-icons/bs";
import {MdAssignment} from "react-icons/md";
import AssignmentControlButtons from "../Assignments/AssignmentControlButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import AssignmentButtons from "./AssignmentButtons";
import AssignmentTopButtons from "./AssignmentTopButtons";
export default function Assignments() {
  return (
    <div id="wd-assignments">

<AssignmentTopButtons />
<br />
  <ListGroup className="rounded-0" id="wd-assignments">
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> 
        <BsGripVertical className="me-2 fs-3" /> Assignments <AssignmentButtons />
	<ListGroupItem id = "wd-cornered-grade" className = "float-end p-1"> <FormLabel
	className = "align-midde fs-5"> 40% of total</FormLabel></ListGroupItem>

	 </div>
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-5 ps-1">
          <BsGripVertical className="me-2 fs-3" /> 
	  <MdAssignment className="me-2 fs-3" />
	  

		<Link href = "Assignments/123" id = "wd-assignment-titles">
		A1
		</Link> 
		<Form.Label id = "wd-module-count">
		Multiple Modules
		</Form.Label> 
		<Form.Label id = "wd-available-until-text">
		| Not Available Until May 6 at 12:00am |
		</Form.Label>  <br />
		<Form.Label id = "wd-due-date-text">
		Due May 12 at 11:59pm  |  100 pts
		</Form.Label> 
		<AssignmentControlButtons />
	  </ListGroupItem>
        <ListGroupItem className="wd-lesson p-5 ps-1">
          <BsGripVertical className="me-2 fs-3" /> 
	  <MdAssignment className="me-1 fs-3" />
	  

		<Link href = "Assignments/123" id = "wd-assignment-titles">
		A2
		</Link>
		<Form.Label id = "wd-module-count">
		Multiple Modules
		</Form.Label> 
		<Form.Label id = "wd-available-until-text">
		| Not Available Until May 12 at 12:00am |
		</Form.Label>  <br />
		<Form.Label id = "wd-due-date-text">
		Due May 19 at 11:59pm  |  100 pts
		</Form.Label> 
		
<AssignmentControlButtons />
          </ListGroupItem>
        <ListGroupItem className="wd-lesson p-5 ps-1">
          <BsGripVertical className="me-2 fs-3" /> 
	  <MdAssignment className="me-1 fs-3" />
	  

		<Link href = "Assignments/123" id = "wd-assignment-titles">
		A3
		</Link>
		<Form.Label id = "wd-module-count">
		Multiple Modules
		</Form.Label> 
		<Form.Label id = "wd-available-until-text">
		| Not Available Until May 19 at 12:00am |
		</Form.Label>  <br />
		<Form.Label id = "wd-due-date-text">
		Due May 26 at 11:59pm  |  100 pts
		</Form.Label> 

          	<AssignmentControlButtons />

          </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  </ListGroup>

    </div>
);}