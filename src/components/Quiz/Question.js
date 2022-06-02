import React from 'react';

const Question = ({ question, options, name }) => {
  return (
    <div>
      <h3>{question}</h3>
      {options.map((option, odx) => {
        const optionName = `${name}--${odx}`;
        return (
          <div key={`${option}_${odx}`}>
            <input type="radio" value={odx+1} name={name} id={optionName} />
            <label htmlFor={optionName}>{option}</label>
          </div>
        )
      })}
    </div>
  );
};

Question.propTypes = {};

Question.defaultProps = {};

export default Question;
