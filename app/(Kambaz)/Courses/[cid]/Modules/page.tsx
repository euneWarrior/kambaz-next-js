"use client"
import { addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import * as db from "../../../Database";
import ModulesControls from "./ModulesControls";
import {FormControl, ListGroup, ListGroupItem} from "react-bootstrap";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { v4 as uuidv4 } from "uuid";
export default function Modules() {
  const { cid } = useParams();
    const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const [moduleName, setModuleName] = useState("");
  const [tempName, setName] = useState("");

  return (
    <div>

<div>
  <ModulesControls setModuleName={setModuleName} moduleName={moduleName} 
         addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }} /> 
   <br /><br /><br /><br />
  <ListGroup className="rounded-0" id="wd-modules">
{modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (

    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> 
	
        <BsGripVertical className="me-2 fs-3" />
	 {!module.editing && module.name}
      { module.editing && (
        <FormControl className="w-50 d-inline-block"
               onChange={(e) => setName(e.target.value)}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
			console.log(module.name);
                   dispatch(updateModule({ ...module, name: tempName, editing: false }));
                 }
               }}
               defaultValue={module.name}/>
      )}
	<ModuleControlButtons moduleId={module._id}
                  deleteModule={(moduleId) => {
                    dispatch(deleteModule(moduleId));
                  }}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}/>

	 </div>
	 {module.lessons && (

      <ListGroup className="wd-lessons rounded-0">
	{module.lessons.map((lesson: any) => (
        <ListGroupItem className="wd-lesson p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" /> {lesson.name}  <LessonControlButtons /> <br /> {lesson.description}
	  </ListGroupItem>))}
      </ListGroup>)}
    </ListGroupItem>))}
  </ListGroup>
</div>
</div>
);}