"use client"
import { redirect, useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {FormCheck, FormSelect, FormControl, Form, Col, Row, Button, Nav} from "react-bootstrap";
import { addQuiz, setQuizzes, updateQuiz } from "../reducer";
import * as client from "../../../client";
import { useEffect, useRef, useState } from "react";
import QuizQuestionEditor from "./QuestionMaker";
import QuestionsTab from "./QuestionMaker";

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

export default function QuizzesEditor(
) {


	  
	  const [assignName, setAssignName] = useState('');
	  const [descript, setDescription] = useState('');

	  const [quizType, setQuizType] = useState('');
  	  const [quizGroup, setGroup] = useState('');
	  const [tempPoints, setPoints] = useState(0);
  	  const [shuffle, setShuffle] = useState(true);
	  const [timeLimit, setTime] = useState(20);
	  const [attempts, setAttempts] = useState(false);
	  const [numAttempts, setNumAttempts] = useState(1);
	  const [showCorrect, setShowCorrect] = useState('');
	  const [correctBool, setCorect] = useState(false);
	  const [access, setAccess] = useState('');
	  const [oneTime, setOneTime] = useState(true);
	  const [webcam, setWebcam] = useState(false);
	  const [lock, setLock] = useState(false);
	

	  const [due, setDue] = useState('');
	  const [avail, setAvail] = useState(''
	  );
	  const [unt, setUnt] = useState('');
	

	
	const [show, setShow] = useState(true);
	const [showQs, setQs] = useState(false);
	const dispatch = useDispatch();
	  const { cid, qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const fetchQuizzes = async () => {
    const quizzes = await client.findQuizzesForCourse(cid as string);
    console.log(quizzes);
    dispatch(setQuizzes(quizzes));
  };
  useEffect(() => {
    fetchQuizzes();
  }, []);

      const handleSaveQuiz = async () => {
	const curQ = qRef.current;
        const quizData = {
            _id: qid,
	    title: assignName,
            description: descript,
            points: tempPoints,
            course: cid,
            
            quizType: quizType,
            assignmentGroup: quizGroup,
            shuffleAnswers: shuffle,
            timeLimit: timeLimit,
            multipleAttempts: attempts,
            showCorrectAnswers: showCorrect,
            showCorrect: correctBool,
            accessCode: access,
            oneTime: oneTime,
            webcam: webcam,
            lockAfter: lock,

            due_dateform: due,
            available_dateform: avail,
            until_dateform: unt,
            
            due: convertDate(due), 
            available: convertDate(avail), 
            until: convertDate(unt),

		
            questions: curQ, 
        };

        if (isNew) {
            await client.createQuizForCourse(cid as string, quizData);
            fetchQuizzes(); 
        } else {
            await client.updateQuiz(quizData);
            const newQuizList = quizzes.map((m: any) => m._id === quizData._id ? quizData : m );
            dispatch(updateQuiz(newQuizList));
        }
        redirect(`/Courses/${cid}/Quizzes`);
    };

    const quiz = quizzes.find((quiz) => quiz._id === qid);
    const isNew = quiz === undefined ? true : false;


    const [quizQuestions, setQuizQuestions] = useState<any[]>([]); 
  const qRef = useRef(quizQuestions);

      useEffect(() => {
        qRef.current = quizQuestions;
    }, [quizQuestions]);

      useEffect(() => {
        if (quiz) {
		console.log("GOTCHA!");
		console.log(quiz);
            setAssignName(quiz.title || '');
            setDescription(quiz.description || '');
            setPoints(quiz.points || 0);
            
            setQuizQuestions(quiz.questions || []); 
	    setGroup(quiz.assignmentGroup);
	    setDue(quiz.due_dateform);
	    setAvail(quiz.available_dateform);
	    setUnt(quiz.until_dateform);
	    setQuizType(quiz.quizType);
	    setShuffle(quiz.shuffleAnswers);
	    setTime(quiz.timeLimit);
	    setAttempts(quiz.multipleAttempts);
	    setNumAttempts(quiz.howManyAttempts);
	    setShowCorrect(quiz.showCorrectAnswers);
	    setCorect(quiz.showCorrect);
	    setAccess(quiz.accessCode);
	    setOneTime(quiz.oneTime);
	    setWebcam(quiz.webcam);
	    setLock(quiz.lockAfter);
        } else {

	  console.log("HOLD IT!");
	  console.log(qid);
	  setQuizType("Graded Quiz");
  	  setGroup("Quizzes");
        }
    }, [quiz]);


  return (<div id="wd-assignments-editor">

	  <Nav variant="tabs">
    <Nav.Item>
      <Nav.Link href="#/General" onClick = {() => {setShow(true); setQs(false);}}>General</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#/Questions" onClick = {() => {setQs(true); setShow(false) }}> Questions </Nav.Link>
    </Nav.Item>
  </Nav>
  {show && (<Form>
   <Form.Group for = "wd-name" as={Row} className="mb-3">
     <Form.Label htmlFor = "wd-name"> Quiz Name </Form.Label>
     <Col sm={8}>
       <Form.Control type="name" placeholder="A1- ENV + HTML" 
       value = {assignName}  onChange={(e) => setAssignName(e.target.value)}/>
     </Col>
   </Form.Group>
   <Col lg = {10}>
      <FormControl as="textarea" rows={15} onChange={(e) => setDescription(e.target.value)}
      value={descript}/> <br />
   </Col>

	   <Form.Group as={Row} className="text-end  mb-4 flex-sm-row position-relative d-flex justify-content-center">
     <Form.Label for = "wd-points" column sm={3} className = "float-end justify-content-end direction-rtl">
	 Points </Form.Label>
     <Col sm={4}>
       <Form.Control id = "wd-points" type="number" value={tempPoints}
       onChange={(e) => setPoints(e.target.value)}
       />
     </Col>
   </Form.Group>


      <Form.Group as={Row} className="text-end mb-4 position-relative d-flex justify-content-center">
     <Form.Label for = "wd-group" column sm={3} className = "text-right"> Assignment Group </Form.Label>
     <Col sm={4}>
   <FormSelect id = "wd-group" value={quizType} onChange={(e) => setQuizType(e.target.value)}>
     <option value="ASSIGNMENTS">ASSIGNMENTS</option>
     <option value="QUIZZES">QUIZZES</option>
     <option value= "EXAMS">EXAMS</option>
     <option value="PROJECT">PROJECT</option>
  </FormSelect>
     </Col>
   </Form.Group>


      <Form.Group as={Row} className="justify-content-center mb-4">
     <Form.Label for = "wd-display-grade-as" className = "text-end" column sm={3}> Quiz Type </Form.Label>
     <Col sm={4}>
   <FormSelect id = "wd-display-grade-as" value={quizGroup} onChange={(e) => setGroup(e.target.value)}>
     <option value="GRADED QUIZ" >Graded Quiz</option>
     <option value="PRACTICE QUIZ">Practice Quiz</option>
     <option value = "GRADED SURVEY">Graded Survey</option>
     <option value = "UNGRADED SURVEY">Ungraded Survey</option>
  </FormSelect>
     </Col>
   </Form.Group>



   <Form.Group as={Row} className="mb-4 position-relative d-flex justify-content-center">
     <Form.Label for = "wd-submission-type" column sm={3} className = "text-end "> Options </Form.Label>
     <Col sm={4}>
       <FormCheck id = "wd-shuffle-entry" type = "checkbox" checked={shuffle} onChange={(e) => setShuffle(e.target.checked)} 
        label="Shuffle Answers"/>
  <FormCheck id = "wd-multiple-attempts" type = "checkbox" checked={attempts} onChange={(e) => setAttempts(e.target.checked)}
   label="Multiple Attempts"/>
            <Col sm={4}>
       <Form.Control id = "wd-attempts" type="number" value={numAttempts}
                 onChange={(e) => setNumAttempts(parseFloat(e.target.value))}
       />
     </Col>
  <FormCheck id="wd-webcam" type="checkbox" checked={webcam} onChange={(e) => setWebcam(e.target.checked)}  label="Webcam Required"/>
  <FormCheck id="wd-one-at-a-time" type="checkbox" checked={oneTime} onChange={(e) => setOneTime(e.target.checked)} label="One Question at a Time"/>
  <FormCheck id="wd-lock-after" type="checkbox" checked={lock} onChange={(e) => setLock(e.target.checked)}  label="Lock Questions After Answering"/>
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
	<Form.Control id = "wd-due-date" type = "date" value={due}
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
			value={avail} />

		</Col>
				<Col sm={3}>
					<Form.Control className = "float" id = "wd-available-until" type = "date" 
					onChange={(e) => setUnt(e.target.value)}
					value={unt} />
				</Col>

	</Form.Group>
		


</div>

	</Form.Group>

  </Form>) }
  {showQs && (
	<div>
		<QuestionsTab questions={quizQuestions} setQuestions={setQuizQuestions}/>
	</div>
  )}
  	<Form.Group className = "text-end">
	    <Button variant="secondary" onClick={()=>{redirect(`/Courses/${cid}/Quizzes`)}}> Cancel </Button>
    <Button variant="danger"
     onClick={handleSaveQuiz} > Save Quiz </Button>
	</Form.Group>
</div>

);}