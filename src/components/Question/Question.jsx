import React from 'react'
import PropTypes from 'prop-types'

const Question = ({
  question,
  index,
  scoreHandler,
  currentQuestion
}) => currentQuestion && (
  <p>{index}) { question }</p>
)

Question.propTypes = {
  question: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  scoreHandler: PropTypes.func.isRequired,
  currentQuestion: PropTypes.bool.isRequired,
}

export default Question
