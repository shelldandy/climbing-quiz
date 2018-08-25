import React, { PureComponent, createRef } from 'react'
import PropTypes from 'prop-types'
import {
  QuestionWrapper,
  Info,
  Input,
  Label
} from './questionStyles'

class Question extends PureComponent {
  input = createRef()

  randomNumber = () => {
    return Math.floor(Math.random() * 10000);
  }

  componentDidMount () {
    const { input } = this
    const actualInput = input.current
    actualInput.focus()
  }

  render () {
    const {
      question,
      index,
      scoreHandler,
    } = this.props

    const { input, randomNumber } = this

    const id = randomNumber()

    return (
      <QuestionWrapper>
        <Info>
          {index}) { question }
        </Info>
        <Label htmlFor={id}>Your answer: (0 - 5)</Label>
        <Input id={id} onChange={scoreHandler} innerRef={input} />
      </QuestionWrapper>
    )
  }
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  scoreHandler: PropTypes.func.isRequired,
}

export default Question
