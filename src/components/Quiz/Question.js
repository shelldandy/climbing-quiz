import React from 'react';

const Question = ({ question, options, name, onOptionClick, currentQuestion }) => {
  return (
    <div>
      <h3>{currentQuestion + 1}) {question}</h3>
      {options.map((option, odx) => {
        const optionName = `${name}--${odx}`;
        return (
          <div key={`${option}_${odx}`}>
            <input type="radio" value={odx+1} name={name} id={optionName} onClick={onOptionClick(odx + 1)} />
            <label htmlFor={optionName} onClick={onOptionClick(odx + 1)}>{option}</label>
          </div>
        )
      })}
    </div>
  );
};

Question.propTypes = {};

Question.defaultProps = {};

export default Question;
