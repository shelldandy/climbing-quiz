import styled from 'styled-components'
import { resetBtn } from 'styled-manila'
import { rem, em } from 'polished'

export const QuestionWrapper = styled.div`
  position: relative;
  background: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0 ${rem(50)} 0 rgba(60,77,88,0.30);

  padding: 2em 1em;
  margin: 0 auto;
  max-width: ${rem(600)};
`

export const Info = styled.p`
  margin-top: 0;
  margin-bottom: 2em;
`

export const Label = styled.label`
  font-weight: 700;
  margin-bottom: ${em(10)};
  display: block;
`

export const Input = styled.input`
  ${resetBtn}
  background: #dedede;
  font-size: ${rem(24)};
  padding: 0.3em;
  width: 100%;
  border: ${em(2)} solid transparent;
  border-radius: ${rem(4)};
  text-align: center;
  display: block;
  max-width: ${em(80)};

  &:focus, &:active {
    border-color: #4450B1;
  }
`
