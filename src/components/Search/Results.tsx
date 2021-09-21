import useSWR from 'swr'
import styled from 'styled-components'

import { fetchSearch } from '../../services'
import Character from './Character'

const CharacterList = styled.div`
  > div {
    border-bottom: 2px solid ${props => props.theme.yellow};
    padding: 10px 0;
    &:last-child {
      border: none;
    }
  }
`

const Results = ({ query }: { query: string }) => {
  const { data } = useSWR(`/search/${query}`, () => fetchSearch(query))

  if (!data) { return <div>loading..</div> }

  const characters = data.results.map((character) => (
    <Character
      key={character.url}
      name={character.name}
      homeWorldUrl={character.homeworld}
      movieUrls={character.films}
    />
  ))

  return (
    <CharacterList>
      {characters}
    </CharacterList>
  )
}

export default Results
