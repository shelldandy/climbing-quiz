import React, { useState } from 'react'
import Question from './Question'

const QuizSection = ({ id, label, questions, advanceSection }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const onOptionClick = e => {
    const { value } = e.target;
    setScore(prevScore => prevScore += Number(value));
    // if last question next section...
    if (currentQuestion + 1 >= questions.length) {
      advanceSection(score);
      setScore(0)
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
