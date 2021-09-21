import { useState } from 'react'
import Form from './Form'
import Results from './Results'

const SearchPage = () => {
  const [ query, setQuery ] = useState('')

  return (
    <div>
      <Form setQuery={setQuery} />

      {query && (
        <Results query={query} />
      )}
    </div>
  )
}

export default SearchPage
