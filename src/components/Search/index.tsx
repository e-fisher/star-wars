import { useState } from 'react'
import Form from './Form'
import Results from './Results'

const SearchPage = () => {
  const [ query, setQuery ] = useState('')
  // TODO validate in form
  const isQueryValid = query && query.trim() !== ''

  return (
    <div>
      <Form setQuery={setQuery} />

      {isQueryValid && (
        <Results query={query} />
      )}
    </div>
  )
}

export default SearchPage
