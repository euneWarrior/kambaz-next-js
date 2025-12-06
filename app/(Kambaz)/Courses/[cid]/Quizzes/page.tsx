'use client';
import Link from "next/link";
import {Form, FormLabel, ListGroup, ListGroupItem} from "react-bootstrap";
import {BsGripVertical} from "react-icons/bs";
import {MdAssignment} from "react-icons/md";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as client from "../../client";
import { setQuizzes } from "./reducer";
import AddQuizButton from "./AddQuizButton";
import QuizButtons from "./QuizButtons";
export default function Quizzes() {
  const { cid } = useParams();
  const dispatch = useDispatch();
const { quizzes } = useSelector((state: any) => state.quizzesReducer);
const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchQuizzes = async () => {
    const quizzes = await client.findQuizzesForCourse(cid as string);
    console.log(quizzes);
    dispatch(setQuizzes(quizzes));
  };
  useEffect(() => {
    fetchQuizzes();
  }, []);
	return (
	
    <div id="wd-assignments">
{currentUser?.role == "FACULTY" && (<AddQuizButton id = {cid}/>) }

<br /> 
  <ListGroup className="rounded-0" id="wd-assignments">
	      <div className="wd-title p-3 ps-2 bg-secondary"> 
        <BsGripVertical className="me-2 fs-3" /> Quizzes
	<ListGroupItem id = "wd-cornered-grade" className = "float-end p-1"> <FormLabel
	className = "align-midde fs-5"> 40% of total</FormLabel></ListGroupItem>

	 </div>
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
	{quizzes
          .map((quiz: any) => (

      <ListGroup key = ""className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-5 ps-1">
          <BsGripVertical className="me-2 fs-3" /> 
	  <MdAssignment className="me-2 fs-3" />
	 <pre>&#9;</pre>
	  {
		currentUser?.role == "STUDENT" && 
		<div>
		<Link href = {`Quizzes/${quiz._id}/attempt`} id = "wd-assignment-titles">
		{quiz.title}
		</Link>
	  </div>
	  }
	  	  {
		currentUser?.role != "STUDENT" && 
		<div>
		<Link href = {`Quizzes/${quiz._id}/details`} id = "wd-assignment-titles">
		{quiz.title}
		</Link> <br />
	  </div>
	  }
	  
		

		<Form.Group className="justify-content-left">
		{isAfter(quiz.available_dateform) && 

		(<div> <Form.Label class = "fw-bold" id = "wd-available-until-text">
		&nbsp; | Not Available until  
		</Form.Label>&nbsp;
		<Form.Label id = "wd-available-until-text">
		{quiz.available} |
		</Form.Label> </div>)}

		{!isAfter(quiz.available_dateform) && 

		(<div> <Form.Label class = "fw-bold" id = "wd-available-until-text">
		Closed
		</Form.Label>&nbsp;
		<Form.Label id = "wd-available-until-text">
		{quiz.available} |
		</Form.Label> </div>)}

		 <br />
		{currentUser?.role == "FACULTY" && <QuizButtons quiz= {quiz}/>}
		<Form.Label class = "fw-bold" id = "wd-due-date-text">
		Due &nbsp;
		</Form.Label> 
		<Form.Label id = "wd-due-date-text">
		{quiz.due} | {quiz.points} points | {quiz?.questionTotal}
		</Form.Label> 
		{currentUser?.role == "STUDENT" && (<FormLabel class = "fw-bold" id = "wd-due-date-text">
			Last Attempt: 21 / {quiz.points}
		</FormLabel>)}
		
		</Form.Group>

		
	  </ListGroupItem>
      </ListGroup>))}
    </ListGroupItem>
  </ListGroup>

    </div>
);}

function isAfter(date : string) {
	const date2: Date = new Date(date);
	if (date2.getTime() > Date.now()) {
		return true;
	}
	return false;
}
