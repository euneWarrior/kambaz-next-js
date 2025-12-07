'use client'
import { redirect, useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import * as client from "../../../../client";
import { useEffect, useState } from "react";
import QuestionRenderer from "./Question";
import { Button, Form } from "react-bootstrap";
import { setQuizzes } from "../../reducer";

export default function QuizAttemptPage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const {cid, qid} = useParams();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [questions, setQuestions] = useState<any[]>([]);
    const [answers, setAnswers] = useState<{ [key: string]: string }>({});
    const [localQuiz, setLocalQuiz] = useState<any>(null);

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const currentUserId = currentUser?._id; 

    const transformedAnswers = Object.keys(answers).map(questionId => ({
        questionId: questionId,
        selectedAnswer: answers[questionId]
    }));


    const reduxQuizzes = useSelector((state: any) => state.quizzesReducer.quizzes);

    const fetchQuizzes = async () => {
        const fetchedQuizzes = await client.findQuizzesForCourse(cid as string);
        console.log("Fetched Quizzes from API:", fetchedQuizzes);
        dispatch(setQuizzes(fetchedQuizzes));
    };

    useEffect(() => {
        if (cid) {
            fetchQuizzes();
        }
    }, [cid]);

    useEffect(() => {
        if (reduxQuizzes && qid) {
            const foundQuiz = reduxQuizzes.find((q: any) => q._id === qid);
            if (foundQuiz) {
                setLocalQuiz(foundQuiz);
                setQuestions(foundQuiz.questions || []);
	    }
        }
    }, [reduxQuizzes, qid]);

    const handleAnswerChange = (questionId: string, value: string) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value
        }));
    };

    const handleSubmitAttempt = async () => {
        if (isSubmitting || !currentUserId || !qid || !cid) return;
        setIsSubmitting(true);

        try {
            const result = await client.saveQuizAttempt(qid as string, transformedAnswers, cid as string, currentUserId);
            router.push(`/Courses/${cid}/Quizzes/${qid}/Results`); 
        } catch (error) {
            setIsSubmitting(false);
            alert("Failed to submit quiz." + error);
        }
    };
        
    if (!localQuiz) {
        return <div className="p-4">Loading quiz details...</div>;
    }

    return (
        <div className="p-4">
            <h1>{localQuiz.title}</h1>
            
            <Form>
                {questions.map((question, index) => (
                    <QuestionRenderer
                        key={question._id} 
                        question={question}
                        answer={answers[question._id] as string || ''}
                        onChange={handleAnswerChange}
                        questionNumber={index + 1}
                    />
                ))}
                
                <div className="text-end mt-4">
                    <Button variant="danger" onClick={handleSubmitAttempt} disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Finish Work'}
                    </Button>
                </div>
            </Form>
        </div>
    );
}
