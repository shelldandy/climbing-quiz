import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Question from '../Question'
import { QuizWrapper } from './quizStyles'

class Quiz extends PureComponent {
  state = {
    score: 0,
    currentQuestion: 0,
  }

  /**
   * Manage what happens when the users types their answer
   * @param event ReactSyntheticEvent
   */
  updateScore = event => {
    const ONLY_NUMBERS = /(\D|[6-9])/
    const value = event.target.value
    const newValue = value.replace(ONLY_NUMBERS,'')

    // Change the DOM we have state for everything else...
    event.target.value = newValue
  }

  render () {
    const { questions } = this.props
    const { updateScore } = this
    const {
      currentQuestion,
    } = this.state

    const questionsLeft = questions.length - currentQuestion;

    return (
      <QuizWrapper>
        <h1>Questions...</h1>

        <Question
          question={questions[currentQuestion]}
          index={currentQuestion + 1}
          scoreHandler={updateScore}
        />

      <p>Just { questionsLeft } questions left...</p>

      </QuizWrapper>
    )
  }

  static propTypes = {
    questions: PropTypes.arrayOf(PropTypes.string)
  }
}

export default Quiz
