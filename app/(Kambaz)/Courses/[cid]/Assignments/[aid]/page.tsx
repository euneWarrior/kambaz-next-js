"use client"
import { useParams } from "next/navigation";
import * as db from "../../../../Database";
import {FormCheck, FormSelect, FormControl, Form, Col, Row, Button} from "react-bootstrap";
export default function AssignmentEditor() {
	  const { aid } = useParams();
  const assignments = db.assignments;
    const assignment = assignments.find((assignment) => assignment._id === aid);
  return (<div id="wd-assignments-editor">
  <Form>
   <Form.Group for = "wd-name" as={Row} className="mb-3">
     <Form.Label htmlFor = "wd-name"> Assignment Name </Form.Label>
     <Col sm={8}>
       <Form.Control type="name" placeholder="A1- ENV + HTML" 
       defaultValue = {assignment?.title}/>
     </Col>
   </Form.Group>
   <Col lg = {10}>
      <FormControl as="textarea" rows={15} defaultValue={assignment?.description}/> <br />
   </Col>

	   <Form.Group as={Row} className="text-end  mb-4 flex-sm-row position-relative d-flex justify-content-center">
     <Form.Label for = "wd-points" column sm={3} className = "float-end justify-content-end direction-rtl">
	 Points </Form.Label>
     <Col sm={4}>
       <Form.Control id = "wd-points" type="number" defaultValue={assignment?.points} />
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
	<Form.Control id = "wd-due-date" type = "date" defaultValue={assignment?.due_dateform} />
	</Col>
	</Form.Group>

	<Form.Group  className = "mb-2 position-relative d-flex justify-content-center">
	<Form.Label className = "float" for = "wd-available-from" column sm={3}> Available from </Form.Label> <br />
	<Form.Label className = "float" for = "wd-available-until" column sm={3}> Until </Form.Label> <br />
	</Form.Group>
	<Form.Group  className = "mb-2 position-relative d-flex justify-content-center">
		<Col sm={3}  className = "float pe-2">
			<Form.Control  className = "float" id = "wd-available-from" type = "date" defaultValue={assignment?.available_dateform} />

		</Col>
				<Col sm={3}>
					<Form.Control className = "float" id = "wd-available-until" type = "date" defaultValue={assignment?.until_dateform} />
				</Col>

	</Form.Group>
		


</div>

	</Form.Group>
  </Form>
</div>

);}
