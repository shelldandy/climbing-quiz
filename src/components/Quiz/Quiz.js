import React, { useState } from 'react'
import Proptypes from 'prop-types'
import quizData from './quizData'
import QuizSection from './QuizSection'

const Quiz = ({ quizData }) => {
  const [currentSection, setCurrentSection] = useState(0);

  const quizProps = quizData[currentSection];
  return (
    <section>
      <QuizSection {...quizProps} currentSection={currentSection} />
    </section>
  );
};

Quiz.propTypes = {
  quizData: Proptypes.arrayOf(Proptypes.shape({
    label: Proptypes.string.isRequired,
    questions: Proptypes.arrayOf(Proptypes.shape({
      question: Proptypes.string.isRequired,
      options: Proptypes.arrayOf(Proptypes.string).isRequired,
    })),
    analysis: Proptypes.arrayOf(Proptypes.shape({
      level: Proptypes.number.isRequired,
      label: Proptypes.string.isRequired,
    }))
  })),
};

Quiz.defaultProps = {
  quizData
};

export default Quiz;
