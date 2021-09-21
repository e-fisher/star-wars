import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.theme.yellow};
  color: ${props => props.theme.bg};
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  font-family: ${props => props.theme.jediFont};
`

export default Button
