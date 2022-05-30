import React from 'react'
import Proptypes from 'prop-types'
import quizData from './quizData'

const Quiz = ({ quizData }) => {
  return (
    <section>
      {quizData && quizData.map(({ label, questions }, idx) => (
        <div key={`${label}_${idx}`}>
          <h2>{label}</h2>
          <form>
            {questions.map(({ question, options }, qdx) => {
              const name = `${idx}__${qdx}`;
              return (
              <div key={`${question}_${qdx}`}>
                <h3>{question}</h3>
                {options.map((option, odx) => {
                const optionName = `${idx}__${qdx}--${odx}`;
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
      ))}
    </section>
  );
};

Quiz.propTypes = {
  quizData: Proptypes.array,
};

Quiz.defaultProps = {
  quizData
};

export default Quiz;
