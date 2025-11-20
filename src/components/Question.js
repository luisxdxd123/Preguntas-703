import React from 'react';
import './Question.css';

const Question = ({ question, selectedAnswer, onAnswerSelect, showFeedback, isCorrect, correctAnswer }) => {
  const getOptionClass = (index) => {
    let classes = 'option';
    
    if (selectedAnswer === index) {
      classes += ' selected';
    }
    
    if (showFeedback) {
      if (index === correctAnswer) {
        classes += ' correct';
      } else if (index === selectedAnswer && !isCorrect) {
        classes += ' incorrect';
      }
    }
    
    return classes;
  };

  return (
    <div className="question-container">
      <h2 className="question-text">{question.question}</h2>
      <div className="options-container">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={getOptionClass(index)}
            onClick={() => !showFeedback && onAnswerSelect(index)}
            style={{ cursor: showFeedback ? 'not-allowed' : 'pointer' }}
          >
            <div className="option-radio">
              {selectedAnswer === index && <div className="option-radio-selected"></div>}
              {showFeedback && index === correctAnswer && (
                <span className="option-icon">✓</span>
              )}
              {showFeedback && index === selectedAnswer && !isCorrect && (
                <span className="option-icon">✗</span>
              )}
            </div>
            <span className="option-text">{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;

