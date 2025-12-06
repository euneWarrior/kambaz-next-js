import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { deleteQuiz, setQuizzes, updateQuiz } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import * as client from "../../client";
import { useParams } from "next/navigation";
import Published from "./Published";
import Link from "next/link";
export default function QuizButtons({quiz} : {quiz: any;} ) {
	const dispatch = useDispatch();
const [show, setShow] = useState(false);
 const handleShow = () => setShow(!show);
   const { cid } = useParams();
 const { quizzes } = useSelector((state: any) => state.assignmentsReducer);
 const [published, setPublished] = useState(false)
  const fetchAssignments = async () => {
    const quizzes = await client.findQuizzesForCourse(cid as string);
    console.log(quizzes);
    dispatch(setQuizzes(quizzes));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  const onUpdateQuizzes = async (quiz: any) => {
    await client.updateQuiz(quiz);
    const newQuiz = quizzes.map((m: any) => m._id === quiz._id ? quiz : m );
    dispatch(updateQuiz({newQuiz}));
  };


   const onRemoveQuizzes = async (moduleId: string) => {
    await client.deleteQuiz(moduleId);
    dispatch(setQuizzes(quizzes.filter((m: any) => m._id !== moduleId)));
  };

  return (
    <div className="float-end translate-middle">
      <Published isPublished={quiz?.published} />
      <IoEllipsisVertical className="fs-4" onClick = {handleShow}/>
      {show && (<div className = "context-menu">
		<FaTrash className="text-danger me-2 mb-1" onClick = {() => {if(show) onRemoveQuizzes(quiz?._id)}}/>
		<button className="text-danger me-2 mb-1" onClick = {() => setPublished(!published)}> 
			{published && <div>unpublish</div>} 

			{!published && <div>publish</div>}
		</button>
		<hr />
		<div>
		<Link href = {`Quizzes/${quiz._id}`} id = "wd-assignment-titles">
		Edit
		</Link>
		</div>
		
      </div>)}

		

    </div> );}

    //<DeleteAssignment show={show} handleClose={handleClose} dialogTitle="Delete Assignment?"
    //   assignmentId={assignmentId} deleteAssignment={onRemoveAssignment}/>