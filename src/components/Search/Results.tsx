import useSWR from 'swr'
import styled from 'styled-components'

import { fetchSearch } from '../../services'
import Character from './Character'
import Loader from '../Loader'

const Result = styled.div`
  border-bottom: 2px solid ${props => props.theme.yellow};
  padding: 10px 0;
  &:last-child {
    border: none;
  }
`

const Results = ({ query }: { query: string }) => {
  const { data } = useSWR(`/search/${query}`, () => fetchSearch(query))

  if (!data) { return <Loader /> }

  const characters = data.results.map((character) => (
    <Result>
      <Character
        key={character.url}
        name={character.name}
        homeWorldUrl={character.homeworld}
        movieUrls={character.films}
      />
    </Result>
  ))

  return (
    <div>
      {characters}
    </div>
  )
}

export default Results
