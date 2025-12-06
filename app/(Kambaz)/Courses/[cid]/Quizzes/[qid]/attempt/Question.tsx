import React from 'react';
import { Card, Form } from 'react-bootstrap';

const QuestionRenderer = ({ question, answer, onChange, questionNumber }) => {
    return (
	<div>
		hi
        <Card className="mb-4">
            <Card.Header>
                Question {questionNumber} ({question.points} pts)
            </Card.Header>
            <Card.Body>
                <Card.Title>{question.title}</Card.Title>
                <Card.Text>{question.description || question.questionText}</Card.Text>
                
                {question.type === 'True False' && (
                    <div role="group">
                            <Form.Check
                                key='true'
                                type="radio"
                                id={`q-${question._id}-choice-${"True"}`}
                                label={"True"}
                                name={`question-${question._id}`} // Groups radios together
                                checked={answer === 'True'} 
                                onChange={() => onChange(question._id, 'True')}
                            />
			    <Form.Check
                                key='false'
                                type="radio"
                                id={`q-${question._id}-choice-${"False"}`}
                                label={"False"}
                                name={`question-${question._id}`} // Groups radios together
                                checked={answer === 'False'} 
                                onChange={() => onChange(question._id, 'False')}
                            />
                    </div>
                )} 
		{question.type == 'Short Answer' && (
                    <Form.Control
                        type="text"
                        placeholder="Type your answer here"
                        value={answer}
                        onChange={(e) => onChange(question._id, e.target.value)}
                    />
                )}
		{question.type == 'Multiple Choice' && (<div role="group">
                        {(question.choices || []).map((choice) => (
                            <Form.Check
                                key={choice.id}
                                type="radio"
                                id={`q-${question._id}-choice-${choice.id}`}
                                label={choice.text}
                                name={`question-${question._id}`} // Groups radios together
                                checked={answer === choice.text} 
                                onChange={() => onChange(question._id, choice.text)}
                            />
                        ))}
                    </div>) }
            </Card.Body>
        </Card>
	</div>
    );
};

export default QuestionRenderer;