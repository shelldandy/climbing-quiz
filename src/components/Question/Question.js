import React, { PureComponent, createRef } from 'react'
import PropTypes from 'prop-types'
import {
  QuestionWrapper,
  Info,
  Input,
} from './questionStyles'

class Question extends PureComponent {
  input = createRef()

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

    const { input } = this

    return (
      <QuestionWrapper>
        <Info>
          {index}) { question }
        </Info>
        <Input onChange={scoreHandler} innerRef={input} />
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
