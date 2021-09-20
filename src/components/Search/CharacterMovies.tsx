import useSWR from 'swr'

import { MovieType } from '../../interfaces'
import { fetchMovies } from "../../services"

const CharacterMovies = ({ movieUrls }: { movieUrls: string[] }) => {
  const { data } = useSWR(JSON.stringify(movieUrls), () => fetchMovies(movieUrls))
  if (!data) { return <div>loading.</div> }

  const movies = sortDateDesc(data).map((movie) => (
    <Movie key={movie.url} title={movie.title} releaseDate={movie.release_date} />
  ))

  return (
    <div>{movies}</div>
  )
}

const Movie = ({ title, releaseDate }: { title: string, releaseDate: string }) => {
  return (
    <div>{title} {releaseDate}</div>
  )
}

const sortDateDesc = (array: MovieType[]) => {
  return array.sort((a, b) => (
    new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
  ))
}

export default CharacterMovies
