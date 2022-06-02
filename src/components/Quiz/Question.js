import React from 'react';

const Question = ({ question, options, name }) => {
  return (
    <div>
      <h3>{question}</h3>
      {options.map((option, odx) => {
        const optionName = `${name}--${odx}`;
        return (
          <div key={`${option}_${odx}`}>
            <label htmlFor={optionName}>{option}</label>
            <input type="radio" value={odx+1} name={name} id={optionName} />
          </div>
        )
      })}
    </div>
  );
};

Question.propTypes = {};

Question.defaultProps = {};

export default Question;
