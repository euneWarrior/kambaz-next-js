'use client'
import React, { useState } from "react";
import { FormCheck, FormControl } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithObjects() {
	  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  	  const [module, setModule] = useState({
    id: 1, name: "Astronomy Intro",
    description: "Introduction to basic astronomy concepts",
    course: "ASTR1010"
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title </a>
      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>

      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Score </a>
      <FormControl type = "number" className="w-75" id="wd-assignment-title"
        defaultValue={assignment.score} onChange={(e) =>
          setAssignment({ ...assignment, score: e.target.value })}/>

	        <a id="wd-update-assignment-complete"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
        Update Completed </a>
	  <FormCheck
	  onChange={() =>
          setAssignment({ ...assignment, completed: !assignment.completed })} />
      <hr />



      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
            <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>

            <a id="wd-retrieve-module" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/module`}>
        Get Module
	
      </a><hr/>
            <a id="wd-retrieve-module-name" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/module/name`}>
        Get Module Name
      </a><hr/>

            <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${HTTP_SERVER}/lab5/module/name/${module.name}`}>
		
        Update Module Name </a>
      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={module.name} onChange={(e) =>
          setModule({ ...module, name: e.target.value })}/>
      <hr />

                  <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${HTTP_SERVER}/lab5/module/description/${module.description}`}>
		
        Update Module Description </a>
      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={module.description} onChange={(e) =>
          setModule({ ...module, description: e.target.value })}/>
      <hr />



    </div>
);}