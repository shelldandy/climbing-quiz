import React, { useState } from 'react'
import Question from './Question'

const QuizSection = ({ id, label, questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questionProps = {
    ...questions[currentQuestion],
    name: `${id}__${currentQuestion}`
  };

  return (
        <div id={id}>
          <h2>{label}</h2>
            <Question {...questionProps} />
        </div>
  );
};

QuizSection.propTypes = {};

QuizSection.defaultProps = {};

export default QuizSection;
