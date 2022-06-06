import React, { useState } from 'react'
import Question from './Question'

const QuizSection = ({ id, label, questions, advanceSection, updateSectionScore }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const onOptionClick = value => () => {
    updateSectionScore(value)
    // if last question next section...
    if (currentQuestion + 1 >= questions.length) {
      advanceSection();
      setCurrentQuestion(0);
    } else {
      setCurrentQuestion(q => q + 1)
    }
  }

  const questionProps = {
    ...questions[currentQuestion],
    name: `${id}__${currentQuestion}`
  };

  return (
    <div id={id}>
      <h2>{label}</h2>
      <Question currentQuestion={currentQuestion} {...questionProps} onOptionClick={onOptionClick} />
    </div>
  );
};

QuizSection.propTypes = {};

QuizSection.defaultProps = {};

export default QuizSection;
