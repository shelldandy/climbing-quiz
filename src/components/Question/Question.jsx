import React from 'react'
import PropTypes from 'prop-types'
import {
  QuestionWrapper,
  Info,
  Input,
} from './questionStyles'

const Question = ({
  question,
  index,
  scoreHandler,
  currentQuestion
}) => currentQuestion && (
  <QuestionWrapper>
    <Info>
      {index}) { question }
    </Info>
    <Input />
  </QuestionWrapper>
)

Question.propTypes = {
  question: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  scoreHandler: PropTypes.func.isRequired,
  currentQuestion: PropTypes.bool.isRequired,
}

export default Question
