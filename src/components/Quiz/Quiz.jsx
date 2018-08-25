import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Question from '../Question'

class Quiz extends Component {
  state = {
    score: 0,
    currentQuestion: 0,
  }

  updateScore = points => {
    const { score } = this.state
    const newScore = score + points
    this.setState({
      score: newScore
    })
  }

  render () {
    const { questions } = this.props
    const { updateScore } = this
    const { currentQuestion } = this.state
    return (
      <div>
        <h1>Questions...</h1>

        { questions && questions.map((question, index) =>
          <Question
            key={index}
            question={question}
            index={index + 1}
            currentQuestion={index === currentQuestion}
            scoreHandler={updateScore}
          />
        ) }
      </div>
    )
  }

  static propTypes = {
    questions: PropTypes.arrayOf(PropTypes.string)
  }
}

export default Quiz
