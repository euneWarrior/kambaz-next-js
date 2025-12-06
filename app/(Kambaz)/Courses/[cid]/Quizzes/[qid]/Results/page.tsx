'use client';
import React, { useState, useEffect } from 'react';
import * as client from '../../../../client'; // Adjust path
import { useParams } from 'next/navigation';
import { Card, Alert, ListGroup, Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setQuizzes } from '../../reducer';
/*
// Assuming simplified schema from previous answer
interface StudentAnswer {
    questionId: string;
    selectedAnswer: string;
    isCorrect?: boolean; // May be added by backend scoring
    pointsAwarded?: number;
}

interface Attempt {
    _id: string;
    totalScore: number;
    answers: StudentAnswer[];
    // ... other fields like userId, quizId
}

interface Question {
    _id: string;
    points: number;
    // ... other question details needed for comparison (e.g., correct answer field if not using isCorrect in attempt)
} */


export default function QuizResultPage() {
    const {cid, qid} = useParams();
    const dispatch = useDispatch();

    const [points, setPoints] = useState(0);
    const [attempt, setAttempt] = useState<any>(null);
    const [questions, setQuestions] = useState<any[]>([]); 
    const [isLoading, setIsLoading] = useState(true);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const currentUserId = currentUser?._id; 
     const [localQuiz, setLocalQuiz] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
		console.log(qid);
                // Fetch the latest attempt for this user (you need a backend route for this)
                const latestAttempt = await client.getLatestQuizAttempt(cid, qid, currentUserId); 
                setAttempt(latestAttempt);

		
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch results:", error);
                setIsLoading(false);
            }
        };

        if (cid && qid && currentUserId) {
            fetchData();
        }
    }, [cid, qid]);

    const reduxQuizzes = useSelector((state: any) => state.quizzesReducer.quizzes);
    
	const fetchQuizzes = async () => {
	    const fetchedQuizzes = await client.findQuizzesForCourse(cid as string);
	    console.log("Fetched Quizzes from API:", fetchedQuizzes);
	    dispatch(setQuizzes(fetchedQuizzes)); // Update the Redux store
	};
    
	// Fetch data initially
	useEffect(() => {
	    if (cid) {
		fetchQuizzes();
	    }
	}, [cid]);
    
	useEffect(() => {
	    if (reduxQuizzes && qid) {
		const foundQuiz = reduxQuizzes.find((q: any) => q._id === qid);
		if (foundQuiz) {
		    console.log("GOTCHA! Found quiz in Redux store.");
		    setLocalQuiz(foundQuiz);
		    setQuestions(foundQuiz.questions || []);
		    setPoints(evaluateTotal(attempt, questions));
		}
	    }
	}, [reduxQuizzes, qid]); 
    

    if (isLoading) {
        return <div className="p-4">Loading Results...</div>;
    }



    return (
        <div className="p-4">
            <h1>Quiz Results</h1>
            <Alert variant="success">
                Your Score: {points} / {questions?.reduce((sum, q) => sum + q.points, 0)} points
            </Alert>

            <h2>Review Answers</h2>
            <ListGroup>
                {questions.map((question, index) => {
                    const studentAnswer = attempt.answers.find(a => a.questionId === question._id);
		    console.log("this is the studentanswer");
		    console.log(studentAnswer);
                    
                    const isCorrect = checkCorrect(studentAnswer.selectedAnswer, question);
		    
                    return (
                        <ListGroup.Item key={question._id} variant={isCorrect ? 'success' : 'danger'}>
                            <div>
                                **Q{index + 1}:** {question.title} ({question.points} pts)
                                <Badge bg={isCorrect ? 'success' : 'danger'} className="float-end">
                                    {isCorrect ? 'Correct' : 'Incorrect'}
                                </Badge>
                            </div>
                            <div className="mt-2">
                                *Your Answer:* {studentAnswer?.selectedAnswer || 'No answer provided'}
                            </div>
                            {!isCorrect && (
                                <div className="mt-2 fw-bold">
                                    *Correct Answer:* { localQuiz.showCorrect && question.choices.find(a=> a.isCorrect==true).text }
                                </div>
                            )}
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
        </div>
    );
}

function checkCorrect(answer: any, question: any) {
	const correctAnswer = question.choices.find((a) => a.isCorrect == true);
	console.log(correctAnswer);
	console.log(answer);
	return answer == correctAnswer.text;
}

function evaluateTotal(attempt, questions) {
	var pnts = 0;
	questions.map((question) => {
                    const studentAnswer = attempt.answers.find(a => a.questionId === question._id);
                    const isCorrect = checkCorrect(studentAnswer.selectedAnswer, question)
		if (isCorrect) pnts = pnts+ question.points});
		return pnts;

		    
}