import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${props => props.theme.yellow};
  color: ${props => props.theme.bg};
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  font-family: ${props => props.theme.jediFont};
`

type ButtonProps = {
  children: React.ReactNode,
  style?: React.CSSProperties,
  onClick?: (e: React.MouseEvent) => void
}

const Button = ({ style, children, onClick }: ButtonProps) => (
  <StyledButton style={style} onClick={onClick}>
    {children}
  </StyledButton>
)

export default Button
