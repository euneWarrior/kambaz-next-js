import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { deleteAssignment } from "./reducer";
import DeleteAssignment from "./AssignmentDelete";
import { assignments } from "@/app/(Kambaz)/Database";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa6";
import { useState } from "react";
export default function AssignmentControlButtons({assignmentId} : {assignmentId: string;} ) {
	const dispatch = useDispatch();
const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
  return (
    <div className="float-end translate-middle">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      	<FaTrash className="text-danger me-2 mb-1" onClick={handleShow}/>

		<DeleteAssignment show={show} handleClose={handleClose} dialogTitle="Delete Assignment?"
       assignmentId={assignmentId} deleteAssignment={(id : string) => {
			   dispatch(deleteAssignment(id));
			 }}/>

    </div> );}

    