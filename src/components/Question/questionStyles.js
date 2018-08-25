import styled from 'styled-components'
import { resetBtn } from 'styled-manila'
import { rem, em } from 'polished'

export const QuestionWrapper = styled.div`
  position: relative;
  background: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0 ${rem(50)} 0 rgba(60,77,88,0.30);

  padding: 1em;
  margin: 0 auto;
  max-width: ${rem(600)};
`

export const Info = styled.p`
  margin-top: 0;
  margin-bottom: 1em;
`

export const Input = styled.input.attrs({
  type: 'num',
  placeholder: '0 - 5',
  required: true,
})`
  ${resetBtn}
  background: #dedede;
  font-size: ${rem(24)};
  padding: 0.3em;
  width: 100%;
  border: ${em(2)} solid transparent;
  border-radius: ${rem(4)};
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-width: ${em(80)};

  &:focus, &:active {
    border-color: #4450B1;
  }
`
