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

const SubmitButton = styled(Button)`
  font-size: 24px;
`

type SetQuery = (query: string) => void

const Form = ({ setQuery }: { setQuery: SetQuery }) => (
  <StyledForm onSubmit={handleSubmit(setQuery)}>
    <Input name="query" placeholder="Search Star Wars Characters" />
    <SubmitButton style={{ fontSize: '24px' }}>Submit</SubmitButton>
  </StyledForm>
)

const handleSubmit = (setQuery: SetQuery) => (e: React.SyntheticEvent) => {
  e.preventDefault()
  const target = e.target as typeof e.target & {
    query: { value: string }
  }

  setQuery(target.query.value.trim())
}

export default Form
