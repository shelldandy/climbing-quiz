import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  QuestionWrapper,
  Info,
  Options,
  Option,
} from './questionStyles'

class Question extends PureComponent {
  render () {
    const {
      question,
      index,
    } = this.props

    return (
      <QuestionWrapper>
        <Info>
          {index}) { question }
        </Info>

        <Options>
          <Option>0</Option>
          <Option>1</Option>
          <Option>2</Option>
          <Option>3</Option>
          <Option>4</Option>
          <Option>5</Option>
        </Options>
      </QuestionWrapper>
    )
  }

  static propTypes = {
    question: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    scoreHandler: PropTypes.func.isRequired,
  }
}

export default Question
