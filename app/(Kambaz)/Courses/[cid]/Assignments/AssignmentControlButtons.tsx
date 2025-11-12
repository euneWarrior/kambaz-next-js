import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { deleteAssignment, setAssignments } from "./reducer";
import DeleteAssignment from "./AssignmentDelete";
import { assignments } from "@/app/(Kambaz)/Database";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import * as client from "../../client";
export default function AssignmentControlButtons({assignmentId} : {assignmentId: string;} ) {
	const dispatch = useDispatch();
const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
 const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    console.log(assignments);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);


   const onRemoveAssignment = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setAssignments(assignments.filter((m: any) => m._id !== moduleId)));
  };

  return (
    <div className="float-end translate-middle">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      	<FaTrash className="text-danger me-2 mb-1" onClick={handleShow}/>

		<DeleteAssignment show={show} handleClose={handleClose} dialogTitle="Delete Assignment?"
       assignmentId={assignmentId} deleteAssignment={onRemoveAssignment}/>

    </div> );}

    