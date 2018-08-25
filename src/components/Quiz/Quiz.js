import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Question from '../Question'
import { QuizWrapper } from './quizStyles'

class Quiz extends Component {
  state = {
    score: 0,
    currentQuestion: 0,
  }

  /**
   * Manage what happens when the users types their answer
   * @param event ReactSyntheticEvent
   * @param event.target HTMLNode
   */
  updateScore = ({ target }) => {
    const { score, currentQuestion } = this.state
    const points = target.value
    const newScore = score + points
    this.setState({
      score: newScore,
      currentQuestion: currentQuestion + 1
    })
  }

  render () {
    const { questions } = this.props
    const { updateScore } = this
    const { currentQuestion } = this.state
    return (
      <QuizWrapper>
        <h1>Questions...</h1>

        <Question
          question={questions[currentQuestion]}
          index={currentQuestion + 1}
          scoreHandler={updateScore}
        />
      </QuizWrapper>
    )
  }

  static propTypes = {
    questions: PropTypes.arrayOf(PropTypes.string)
  }
}

export default Quiz
