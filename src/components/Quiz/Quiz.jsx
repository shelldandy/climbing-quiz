import React from 'react'
import PropTypes from 'prop-types'
import Question from '../Question'

const Quiz = ({ questions }) => (
  <div>
    <h1>Questions...</h1>

    { questions && questions.map((question, index) =>
      <Question key={index} question={question} index={index + 1} />
    ) }
  </div>
);

Quiz.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.string)
}

export default Quiz
