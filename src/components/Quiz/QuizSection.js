import React from 'react';

const QuizSection = ({ label, questions }) => {
  return (
        <div>
          <h2>{label}</h2>
          <form>
            {questions.map(({ question, options, currentSection }, qdx) => {
              const name = `${currentSection}__${qdx}`;
              return (
              <div key={`${question}_${qdx}`}>
                <h3>{question}</h3>
                {options.map((option, odx) => {
                const optionName = `${currentSection}__${qdx}--${odx}`;
                  return (
                    <div key={`${option}_${odx}`}>
                      <label htmlFor={optionName}>{option}</label>
                      <input type="radio" value={odx+1} name={name} id={optionName} />
                    </div>
                )
                })}
              </div>
            )
            })}
          </form>
        </div>
  );
};

QuizSection.propTypes = {};

QuizSection.defaultProps = {};

export default QuizSection;
