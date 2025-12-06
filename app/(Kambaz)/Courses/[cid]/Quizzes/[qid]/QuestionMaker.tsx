import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Row, FormControl, FormCheck } from 'react-bootstrap';
import { FaTrash, FaPencilAlt, FaPlus } from 'react-icons/fa';
import { v4 as uuidv4 } from "uuid";
    //id: string;
    //text: string;
    //isCorrect: boolean; 

    
const MultipleChoiceEditor = ({ question, onUpdate }: { question: any, onUpdate: (q: any) => void }) => {


	
    const [title, setTitle] = useState(question.title);
    const [description, setDesc] = useState(question.description);
    const [points, setPoints] = useState(0);
    const [answers, setAnswers] = useState<any[]>(question.choices || []);
        useEffect(() => {
        setTitle(question.title);
        setDesc(question.description);
        setPoints(question.points || 0);
        setAnswers(question.choices || []);
    }, [question]);

    const handleChoiceTextChange = (id: string, text: string) => {
        const updatedChoices = answers.map(choice => choice.id === id ? { ...choice, text } : choice);
        setAnswers(updatedChoices);
    };

    const handleCorrectAnswerChange = (selectedId: string) => {
        const updatedChoices = answers.map(choice => ({
            ...choice,
            isCorrect: choice.id === selectedId
        }));
        setAnswers(updatedChoices);
    };

        const addChoice = () => {
        const newChoice: any = {
            id: uuidv4(),
            text: `New Choice ${answers.length + 1}`,
            isCorrect: false
        };
        setAnswers([...answers, newChoice]);
    };
        const removeChoice = (id: string) => {
        setAnswers(answers.filter(choice => choice.id !== id));
    };

    const handleSave = () => {
	console.log("handleSave was clicked inside multi!"); 
        onUpdate({
            ...question,
            title,
            description,
            points,
            choices: answers, 
	    type: "Multiple Choice",
            isEditing: false
        });
    };
    
    const handleCancel = () => {
        onUpdate({...question, isEditing: false});
    }


    return (
        <Form className="p-3 border rounded mb-3">
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Question Description</Form.Label>
                <FormControl as="textarea" rows={3} value={description} onChange={e => setDesc(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Points</Form.Label>
                <Form.Control type="number" value={points} onChange={e => setPoints(parseFloat(e.target.value))} className="w-25" />
            </Form.Group>

            <h4 className="mt-4">Choices</h4>
            {answers.map((choice) => (
                <Form.Group key={choice.id} className="mb-2">
                    <Form.Group>
                        <FormCheck 
                            type="radio"
                            name={`correctAnswer-${question._id}`}
                            checked={choice.isCorrect}
                            onChange={() => handleCorrectAnswerChange(choice.id)}
                            aria-label="Radio button for correct answer selection"
                        />
                    </Form.Group>
                    <FormControl
                        aria-label="Choice text input"
                        value={choice.text}
                        onChange={(e) => handleChoiceTextChange(choice.id, e.target.value)}
                    />
                    <Button variant="outline-danger" onClick={() => removeChoice(choice.id)}>
                        <FaTrash />
                    </Button>
                </Form.Group>
            ))}
            <Button variant="outline-primary" onClick={addChoice} className="mt-2">
                <FaPlus /> Add Another Choice
            </Button>
            
            <div className="text-end mt-4 pt-3 border-top">
                <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
                <Button variant="danger" onClick={handleSave} className="ms-2">Save Question</Button>
            </div>
        </Form>
    );
};

const ShortAnswerEditor = ({ question, onUpdate }: { question: any, onUpdate: (q: any) => void }) => {


	
    const [title, setTitle] = useState(question.title);
    const [description, setDesc] = useState(question.description);
    const [points, setPoints] = useState(0);
    const [answers, setAnswers] = useState<any[]>(question.choices || []);
        useEffect(() => {
        setTitle(question.title);
        setDesc(question.description);
        setPoints(question.points || 0);
        setAnswers(question.choices || []);
    }, [question]);

    const handleChoiceTextChange = (id: string, text: string) => {
        const updatedChoices = answers.map(choice => choice.id === id ? { ...choice, text } : choice);
        setAnswers(updatedChoices);
    };

        const addChoice = () => {
        const newChoice: any = {
            id: uuidv4(),
            text: `New Choice ${answers.length + 1}`,
        };
        setAnswers([...answers, newChoice]);
    };
        const removeChoice = (id: string) => {
        setAnswers(answers.filter(choice => choice.id !== id));
    };

    const handleSave = () => {
	console.log("handleSave was clicked inside short!"); 
        onUpdate({
            ...question,
            title,
            description,
            points,
            choices: answers, 
	    type: "Short Answer",
            isEditing: false
        });
    };
    
    const handleCancel = () => {
        onUpdate({...question, isEditing: false});
    }


    return (
        <Form className="p-3 border rounded mb-3">
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Question Description</Form.Label>
                <FormControl as="textarea" rows={3} value={description} onChange={e => setDesc(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Points</Form.Label>
                <Form.Control type="number" value={points} onChange={e => setPoints(parseFloat(e.target.value))} className="w-25" />
            </Form.Group>

            <h4 className="mt-4">Choices</h4>
            {answers.map((choice) => (
                <Form.Group key={choice.id} className="mb-2">
                    <FormControl
                        aria-label="Choice text input"
                        value={choice.text}
                        onChange={(e) => handleChoiceTextChange(choice.id, e.target.value)}
                    />
                    <Button variant="outline-danger" onClick={() => removeChoice(choice.id)}>
                        <FaTrash />
                    </Button>
                </Form.Group>
            ))}
            <Button variant="outline-primary" onClick={addChoice} className="mt-2">
                <FaPlus /> Add Another Choice
            </Button>
            
            <div className="text-end mt-4 pt-3 border-top">
                <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
                <Button variant="danger" onClick={handleSave} className="ms-2">Save Question</Button>
            </div>
        </Form>
    );
};

const TrueFalseEditor = ({ question, onUpdate }: { question: any, onUpdate: (q: any) => void }) => {


	
    const [title, setTitle] = useState(question.title);
    const [description, setDesc] = useState(question.description);
    const [points, setPoints] = useState(0);
    const [correct, setCorrect] = useState(question.correct || 0);
        useEffect(() => {
        setTitle(question.title);
        setDesc(question.description);
        setPoints(question.points || 0);
        setCorrect(question.correct === 'False' ? 'False' : 'True');
    }, [question]);


    const handleSave = () => {
	console.log("handleSave was clicked inside TrueFalseEditor!"); 
        onUpdate({
            ...question,
            title,
            description,
            points,
            correct: correct, 
	    type: "True False",
            isEditing: false
        });
    };
    
    const handleCancel = () => {
        onUpdate({...question, isEditing: false});
    }


    return (
        <Form className="p-3 border rounded mb-3">
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Question Description</Form.Label>
                <FormControl as="textarea" rows={3} value={description} onChange={e => setDesc(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Points</Form.Label>
                <Form.Control type="number" value={points} onChange={e => setPoints(parseFloat(e.target.value))} className="w-25" />
            </Form.Group>

            <h4 className="mt-4">Choices</h4>
           
                <FormCheck 
                    type="radio"
                    id={`true-option-${question._id}`}
                    label="True"
                    name={`tf-answer-${question._id}`}
                    checked={correct === 'True'}
                    onChange={() => setCorrect('True')}
                />
                
                <FormCheck 
                    type="radio"
                    id={`false-option-${question._id}`}
                    label="False"
                    name={`tf-answer-${question._id}`}
                    checked={correct === 'False'}
                    onChange={() => setCorrect('False')}
                />
            
            <div className="text-end mt-4 pt-3 border-top">
                <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
                <Button variant="danger" onClick={handleSave} className="ms-2">Save Question</Button>
            </div>
        </Form>
    );
};

const QuizQuestionEditor = ({ question, onUpdate, onDelete }: { question: any, onUpdate: (q: any) => void, onDelete: (q: any) => void}) => {

    if (question?.isEditing) {
        return (
            <div className="border p-3 mb-3">
                <Row className="mb-3">
                    <Col>
                        <Form.Select value={question.type} onChange={(e) => onUpdate({...question, type: e.target.value as any})}>
                            <option value="MULTIPLE_CHOICE">Multiple Choice</option>
                            <option value="TRUE_FALSE">True/False</option>
                            <option value="FILL_IN_BLANK">Fill in a Blank</option>
                        </Form.Select>
                    </Col>

                </Row>
                
                {question.type === 'MULTIPLE_CHOICE' && <MultipleChoiceEditor question={question} onUpdate={onUpdate} />}
                {question.type === 'TRUE_FALSE' && <TrueFalseEditor question={question} onUpdate={onUpdate} />}
		{question.type === 'FILL_IN_BLANK' && <ShortAnswerEditor question={question} onUpdate={onUpdate} />}
            </div>
        );
    } else {
        // Preview Mode
        return (
            <div className="p-3 mb-3 border d-flex justify-content-between align-items-center">
                <span>{question.title}</span>
                <div>
                    <span>{question.points} pts</span>
                    <Button variant="outline-primary" className="ms-2" onClick={() => onUpdate({...question, isEditing: true})}><FaPencilAlt /></Button>
                </div>
            </div>
        );
    }
};

const QuestionsTab = ({questions, setQuestions}) => {

    const addQuestion = () => {
        const newQuestion = {
            _id: uuidv4(),
            title: `New Question ${questions.length + 1}`,
            points: 1,
            type: 'MULTIPLE_CHOICE',
            questionText: 'Question text here...',
            isEditing: true, 
            choices: [{id: '1', text: 'Choice 1', isCorrect: true}]
        };
        setQuestions([...questions, newQuestion]);
    };

    const updateQuestionInList = (updatedQuestion: any) => {
        setQuestions(questions.map(q => q._id === updatedQuestion._id ? updatedQuestion : q));
    };

    const deleteQuestionFromList = (id: string) => {
        setQuestions(questions.filter(q => q._id !== id));
    };

    const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);

    useEffect(() => {
        console.log("QuestionsTab sees updates:", questions);
        console.log("Total questions in QuestionsTab:", questions.length);
    }, [questions]);

    return (
        <div className="mt-4">
            <div className="d-flex justify-content-end mb-3">
                <span className="me-3">Total Points: {totalPoints}</span>
                <Button variant="danger" onClick={addQuestion}>+ New Question</Button>
            </div>
            {questions.length === 0 ? (
                <p>No questions added yet.</p>
            ) : (
                questions.map(q => (
                    <QuizQuestionEditor 
                        key={q._id} 
                        question={q} 
                        onUpdate={updateQuestionInList} 
                        onDelete={deleteQuestionFromList} 
                    />
                ))
            )}
        </div>
    );
};

export default QuestionsTab;