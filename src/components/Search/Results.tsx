import styled from 'styled-components'
import { useState, useEffect } from 'react'

import { useFetch } from '../../hooks/useFetch'
import { fetchSearch } from '../../services'
import Character from './Character'
import Loader from '../Loader'
import Pagination from './Pagination'

const Result = styled.div`
  border-bottom: 2px solid ${props => props.theme.yellow};
  padding: 10px 0;
  &:last-child {
    border: none;
  }
`

const Results = ({ query }: { query: string }) => {
  const [page, setPage] = useState(1)
  const { data } = useFetch(`search=${query}&page=${page}`, fetchSearch)

  useEffect(() => {
    setPage(1)
  }, [query, setPage])

  if (!data) { return <Loader /> }

  if (data.results.length === 0) {
    return <div>No results - try different keyword</div>
  }

  const characters = data.results.map((character) => (
    <Result key={character.url}>
      <Character
        name={character.name}
        homeWorldUrl={character.homeworld}
        movieUrls={character.films}
        species={character.species}
      />
    </Result>
  ))

  return (
    <div>
      <div>{characters}</div>
      <div>
        <Pagination count={data.count} setPage={setPage} page={page} />
      </div>
    </div>
  )
}

export default Results
