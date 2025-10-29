"use client"
import { redirect, useParams } from "next/navigation";
import * as db from "../../../../Database";
import { useDispatch } from "react-redux";
import {FormCheck, FormSelect, FormControl, Form, Col, Row, Button} from "react-bootstrap";
import { addAssignment, updateAssignment } from "../reducer";
import { assignments } from "../../../../Database";
import { useState } from "react";
import store from "@/app/(Kambaz)/store";

function convertDate(date : string) {
	if (date === undefined) { console.log("oops"); return ""; }
	console.log(date);
	const year = date.at(0) + date.at(1) + date.at(2) + date.at(3);
	const month = getMonth(date.at(5) + date.at(6));
	const day = (date.at(8) === "0" ? "" : date.at(8)) + "" + date.at(9) 
	+ "th";
	return month + " " + day + ", "+ year + ", 11:59 pm";
}

function getMonth(month: string) {
	switch (month) {
		case "01":
			return "January";
		case "02":
			return "Feburary";
		case "03":
			return "March";
		case "04":
			return "April";
		case "05":
			return "May";
		case "06":
			return "June";
		case "07":
			return "July";
		case "08":
			return "August";
		case "09":
			return "September";
		case "10":
			return "October";
		case "11":
			return "November";
		case "12":
			return "December";
		default:
			return "";
		
		
	}
}

export default function AssignmentEditor(
) {
	const dispatch = useDispatch();
	  const { cid, aid } = useParams();
  const assignments = db.assignments;
    const assignment = assignments.find((assignment) => assignment._id === aid);
    const isNew = assignment === undefined ? true : false;
	  const [assignName, setAssignName] = useState(assignment?.title);
	  const [descript, setDescription] = useState(assignment?.description);
	  const [tempPoints, setPoints] = useState(assignment?.points);
	  const [due, setDue] = useState(assignment?.due_dateform);
	  const [avail, setAvail] = useState(assignment?.available_dateform
	  );
	  const _id = aid;
	  const [unt, setUnt] = useState(assignment?.until_dateform);
	
  return (<div id="wd-assignments-editor">
  <Form>
   <Form.Group for = "wd-name" as={Row} className="mb-3">
     <Form.Label htmlFor = "wd-name"> Assignment Name </Form.Label>
     <Col sm={8}>
       <Form.Control type="name" placeholder="A1- ENV + HTML" 
       defaultValue = {assignName}  onChange={(e) => setAssignName(e.target.value)}/>
     </Col>
   </Form.Group>
   <Col lg = {10}>
      <FormControl as="textarea" rows={15} onChange={(e) => setDescription(e.target.value)}
      defaultValue={assignment?.description}/> <br />
   </Col>

	   <Form.Group as={Row} className="text-end  mb-4 flex-sm-row position-relative d-flex justify-content-center">
     <Form.Label for = "wd-points" column sm={3} className = "float-end justify-content-end direction-rtl">
	 Points </Form.Label>
     <Col sm={4}>
       <Form.Control id = "wd-points" type="number" defaultValue={tempPoints}
       onChange={(e) => setPoints(e.target.value)}
       />
     </Col>
   </Form.Group>


      <Form.Group as={Row} className="text-end mb-4 position-relative d-flex justify-content-center">
     <Form.Label for = "wd-group" column sm={3} className = "text-right"> Assignment Group </Form.Label>
     <Col sm={4}>
   <FormSelect id = "wd-group">
     <option value="ASSIGNMENTS" defaultChecked>ASSIGNMENTS</option>
     <option value="QUIZZES">QUIZZES</option>
  </FormSelect>
     </Col>
   </Form.Group>


      <Form.Group as={Row} className="justify-content-center mb-4">
     <Form.Label for = "wd-display-grade-as" className = "text-end" column sm={3}> Display Grade as </Form.Label>
     <Col sm={4}>
   <FormSelect id = "wd-display-grade-as">
     <option value="PERCENTAGE" defaultChecked>Percentage</option>
     <option value="POINTS">Points</option>
  </FormSelect>
     </Col>
   </Form.Group>



   <Form.Group as={Row} className="mb-4 position-relative d-flex justify-content-center">
     <Form.Label for = "wd-submission-type" column sm={3} className = "text-end "> Submission Type </Form.Label>
     <Col sm={4}>
   <FormSelect id = "wd-submission-type">
     <option value="ONLINE" defaultChecked>Online</option>
     <option value="OFFLINE">Offline</option>
  </FormSelect> <br />
  <FormCheck id = "wd-text-entry" type = "checkbox" defaultChecked={false} label="Text Entry"/>
  <FormCheck id="wd-website-url" type="checkbox" defaultChecked={true}  label="Website URL"/>
  <FormCheck id="wd-media-recordings" type="checkbox" defaultChecked={false} label="Media Recordings"/>
  <FormCheck id="wd-student-annotation" type="checkbox" defaultChecked={false}  label="Student Annotation"/>
    <FormCheck id="wd-file-upload" type="checkbox" defaultChecked={false}  label="File Uploads"/>
     </Col>
   </Form.Group>

	<Form.Label for = "wd-assign" className = "col-sm-4 ps-5 justify-content-center text-end"> Assign </Form.Label> <br />
	<Form.Group>

<div id = "wd-assignment-date-info">
	
<Form.Group  className = "mb-4 box position-relative d-flex justify-content-center">
				
<Form.Label for = "wd-assign-to" className = "col-sm-2"> Assign to</Form.Label>
<Col sm={4}>
<Form.Control placeholder="Everyone"/> <br />
</Col>
</Form.Group>
	<Form.Group  className = "mb-4 position-relative d-flex justify-content-center">
	<Form.Label for = "wd-due-date" column sm={2}> Due </Form.Label> <br />
	<Col sm={4}>
	<Form.Control id = "wd-due-date" type = "date" defaultValue={assignment?.due_dateform}
	onChange={(e) => setDue(e.target.value)} />
	</Col>
	</Form.Group>

	<Form.Group  className = "mb-2 position-relative d-flex justify-content-center">
	<Form.Label className = "float" for = "wd-available-from" column sm={3}> Available from </Form.Label> <br />
	<Form.Label className = "float" for = "wd-available-until" column sm={3}> Until </Form.Label> <br />
	</Form.Group>
	<Form.Group  className = "mb-2 position-relative d-flex justify-content-center">
		<Col sm={3}  className = "float pe-2">
			<Form.Control  className = "float" id = "wd-available-from" type = "date" 
			onChange={(e) => setAvail(e.target.value)}
			defaultValue={assignment?.available_dateform} />

		</Col>
				<Col sm={3}>
					<Form.Control className = "float" id = "wd-available-until" type = "date" 
					onChange={(e) => setUnt(e.target.value)}
					defaultValue={assignment?.until_dateform} />
				</Col>

	</Form.Group>
		


</div>

	</Form.Group>
	<Form.Group className = "text-end">
	    <Button variant="secondary" onClick={()=>{redirect(`/Courses/${cid}/Assignments`)}}> Cancel </Button>
    <Button variant="danger"
     onClick={() => { if (isNew) {console.log(_id);
	console.log(assignName);
	dispatch(addAssignment({_id: aid, title: assignName,
		description: descript,
		points: tempPoints, course: cid, due: convertDate(due), available_dateform: avail, until_dateform: unt,
		available: convertDate(avail), until: convertDate(unt), due_dateform: due}))

	redirect(`/Courses/${cid}/Assignments`)
     } else {
	dispatch(updateAssignment({_id: aid, title: assignName,
		description: descript,
		points: tempPoints, course: cid, due_dateform: due, available_dateform: avail, until_dateform: unt,
	due: convertDate(due), available: convertDate(avail), until: convertDate(unt) }));
	redirect(`/Courses/${cid}/Assignments`)
     }
     }} > Add Module </Button>
	</Form.Group>

  </Form>
</div>

);}
