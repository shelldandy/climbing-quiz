import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Question from '../Question'

class Quiz extends Component {
  state = {
    score: 0,
    currentQuestion: 0,
  }

  updateScore = event => {
    const { score, currentQuestion } = this.state
    const points = event.target.value
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
      <div>
        <h1>Questions...</h1>

        <Question
          question={questions[currentQuestion]}
          index={currentQuestion + 1}
          scoreHandler={updateScore}
        />
      </div>
    )
  }

  static propTypes = {
    questions: PropTypes.arrayOf(PropTypes.string)
  }
}

export default Quiz
