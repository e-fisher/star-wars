import { useState } from 'react'
import useSWR from 'swr'
import styled from 'styled-components'

import { fetchPlanet, fetchMultipleSpecies } from '../../services'
import CharacterMovies from './CharacterMovies'
import Button from '../Button'

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
  span {
    font-size: 16px;
    font-weight: 300;
  }
`

type CharacterProps = {
  name: string,
  homeWorldUrl: string,
  movieUrls: string[],
  species: string[],
}

const Character = ({ name, homeWorldUrl, movieUrls, species }: CharacterProps) => {
  const [ showMovies, setShowMovies ] = useState(false)
  const toggleShowMovies = () => setShowMovies(!showMovies)

  return (
    <div>
      <CharacterRow>
        <Details>
          <Name>
            {name} <span><Species speciesUrls={species} /></span>
          </Name>
          <Planet homeWorldUrl={homeWorldUrl} />
        </Details>
        <Button onClick={toggleShowMovies}>show movies</Button>
      </CharacterRow>

      {showMovies && (
        <CharacterMovies movieUrls={movieUrls} />
      )}
    </div>
  )
}

const Planet = ({ homeWorldUrl }: { homeWorldUrl: string }) => {
  const { data: planet } = useSWR(homeWorldUrl, fetchPlanet)

  if (!planet) { return null }
  return (
    <div>{planet.name}, pop.: {planet.population}</div>
  )
}

const Species = ({ speciesUrls }: { speciesUrls: string[] }) => {
  const { data: species } = useSWR(JSON.stringify(speciesUrls), () =>
    fetchMultipleSpecies(speciesUrls),
  )

  if (!species) { return null }
  if (species.length === 0) { return <>Human</> }

  return (
    <>{species.map(spc => spc.name).join(' ')}</>
  )
}

export default Character
