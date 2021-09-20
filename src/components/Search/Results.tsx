import useSWR from 'swr'

import { fetchSearch } from '../../services'
import Character from './Character'

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
    <div>
      {characters}
    </div>
  )
}

export default Results
