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

export const Options = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const Option = styled.button`
  ${resetBtn};
  font-size: ${rem(18)};
  display: block;
  padding: ${em(10)};
  font-weight: 700;
`
