import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Question from '../Question'
import { QuizWrapper } from './quizStyles'

class Quiz extends Component {
  state = {
    score: 0,
    currentQuestion: 0,
    currentAnswer: '',
  }

  /**
   * Manage what happens when the users types their answer
   * @param event ReactSyntheticEvent
   */
  updateScore = event => {
    const ONLY_NUMBERS = /(\D|[6-9])/
    const value = event.target.value
    const newValue = value.replace(ONLY_NUMBERS,'')
    const currentAnswer = Number(newValue)

    this.setState({ currentAnswer })
  }

  render () {
    const { questions } = this.props
    const { updateScore } = this
    const {
      currentQuestion,
      currentAnswer
    } = this.state

    return (
      <QuizWrapper>
        <h1>Questions...</h1>

        <Question
          question={questions[currentQuestion]}
          index={currentQuestion + 1}
          scoreHandler={updateScore}
          currentAnswer={currentAnswer}
        />
      </QuizWrapper>
    )
  }

  static propTypes = {
    questions: PropTypes.arrayOf(PropTypes.string)
  }
}

export default Quiz
