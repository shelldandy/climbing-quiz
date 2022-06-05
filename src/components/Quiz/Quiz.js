import React, { useState } from 'react'
import Proptypes from 'prop-types'
import quizData from './quizData'
import QuizSection from './QuizSection'

const Quiz = ({ quizData }) => {
  const [scores, setScores] = useState(quizData.map(s => ({
    ...s,
    score: 0,
  })))
  const totalSections = scores.length;
  const [currentSection, setCurrentSection] = useState(0);
  const quizProps = scores[currentSection];

  const advanceSection = score => {
    if (currentSection > totalSections) {
      setCurrentSection(section => section + 1);
      setScores(prevScores => {
        prevScores[currentSection].score = score;
        return prevScores;
      })
    }
  };

  return (
    <>
      <QuizSection {...quizProps} currentSection={currentSection} advanceSection={advanceSection} />
    </>
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
