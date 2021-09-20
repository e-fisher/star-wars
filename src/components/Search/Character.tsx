import { useState } from 'react'
import useSWR from 'swr'

import { fetchPlanet } from '../../services'
import CharacterMovies from './CharacterMovies'

type CharacterProps = {
  name: string,
  homeWorldUrl: string,
  movieUrls: string[]
}

const Character = ({ name, homeWorldUrl, movieUrls }: CharacterProps) => {
  const [ showMovies, setShowMovies ] = useState(false)
  const { data: planet } = useSWR(homeWorldUrl, fetchPlanet)
  const toggleShowMovies = () => setShowMovies(!showMovies)

  if (!planet) { return <div>loading</div> }
  return (
    <div>
      <div>
        {name} {planet.name}, pop.: {planet.population}
      </div>
      <button onClick={toggleShowMovies}>show movies</button>

      {showMovies && (
        <CharacterMovies movieUrls={movieUrls} />
      )}
    </div>

  )
}

export default Character
