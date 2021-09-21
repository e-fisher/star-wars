import styled from 'styled-components'
import Button from '../Button'

const StyledForm = styled.form`
  display: flex;
  margin-bottom: 20px;
`

const Input = styled.input`
  border: 4px solid ${props => props.theme.yellow};
  background: transparent;
  font-weight: bold;
  font-size: 22px;
  &:focus {
    outline: none;
  }
  flex-grow: 1;
  text-align: center;
`

const Form = ({ setQuery }: any) => (
  <StyledForm onSubmit={handleSubmit(setQuery)}>
    <Input name="query" placeholder="Search Star Wars Characters" />
    <Button style={{ fontSize: '24px' }}>Submit</Button>
  </StyledForm>
)

const handleSubmit = (setQuery: any) => (e: React.SyntheticEvent) => {
  e.preventDefault()
  const target = e.target as typeof e.target & {
    query: { value: string }
  }

  setQuery(target.query.value.trim())
}

export default Form
