const Form = ({ setQuery }: any) => (
  <form onSubmit={handleSubmit(setQuery)}>
    <input name="query" />
    <button>Submit</button>
  </form>
)

const handleSubmit = (setQuery: any) => (e: React.SyntheticEvent) => {
  e.preventDefault()
  const target = e.target as typeof e.target & {
    query: { value: string }
  }
  setQuery(target.query.value)
}

export default Form
