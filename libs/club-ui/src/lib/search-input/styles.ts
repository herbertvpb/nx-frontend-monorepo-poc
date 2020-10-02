import styled from 'styled-components'
import { InputBase } from '@material-ui/core'

const Input = styled(InputBase)`
  background-color: #f8f9fe;
  padding: 10px;
  height: 40px;
  line-height: 40px;
  font-family: 'OpenSans', sans-serif;
  transition: border-bottom ease-in-out 0.4s;
  svg {
    margin-right: 10px;
    fill: #b1b8cf;
  }
  &:focus-within {
    border-bottom: 2px solid black;
    svg {
      fill: black;
    }
  }
  &:not(focus-within) {
    border-bottom: 2px solid transparent;
  }
  input::placeholder {
    color: #b1b9d0;
  }
`

export default Input;
