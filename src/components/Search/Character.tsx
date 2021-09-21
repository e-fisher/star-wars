import { useState } from 'react'
import useSWR from 'swr'
import styled from 'styled-components'

import { fetchPlanet } from '../../services'
import CharacterMovies from './CharacterMovies'
import Button from '../Button'

type CharacterProps = {
  name: string,
  homeWorldUrl: string,
  movieUrls: string[]
}

const CharacterRow = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;
`

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin-right: 10px;
  align-items: center;
`

const Name = styled.h2`
  font-size: 24px;
  margin: 0;
`

const Character = ({ name, homeWorldUrl, movieUrls }: CharacterProps) => {
  const [ showMovies, setShowMovies ] = useState(false)
  const { data: planet } = useSWR(homeWorldUrl, fetchPlanet)
  const toggleShowMovies = () => setShowMovies(!showMovies)

  if (!planet) { return <div>loading</div> }
  return (
    <div>
      <CharacterRow>
        <Details>
          <Name>{name}</Name>
          <div>{planet.name}, pop.: {planet.population}</div>
        </Details>
        <Button onClick={toggleShowMovies}>show movies</Button>
      </CharacterRow>

      {showMovies && (
        <CharacterMovies movieUrls={movieUrls} />
      )}
    </div>
  )
}

export default Character
