import useSWR from 'swr'

import { MovieType } from '../../interfaces'
import { fetchMovies } from "../../services"
import Loader from '../Loader'

const CharacterMovies = ({ movieUrls }: { movieUrls: string[] }) => {
  const { data } = useSWR(JSON.stringify(movieUrls), () => fetchMovies(movieUrls))
  if (!data) { return <Loader inline /> }

  const movies = sortDateDesc(data).map((movie) => (
    <Movie
      key={movie.url}
      title={movie.title}
      releaseDate={movie.release_date}
      openingCrawl={movie.opening_crawl}
    />
  ))

  return (
    <div>{movies}</div>
  )
}

type MovieProps = {
  title: string,
  releaseDate: string,
  openingCrawl: string,
}

const Movie = ({ title, releaseDate, openingCrawl }: MovieProps) => {
  return (
    <div>
      <h3>{title} ({releaseDate})</h3>
      <p>{truncateString(openingCrawl, 150)}</p>
    </div>
  )
}

const sortDateDesc = (array: MovieType[]) => {
  return array.sort((a, b) => (
    new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
  ))
}

const truncateString = (str: string, length: number) => (
  str.substring(0, length) + (str.length > length ? '...' : '')
)

export default CharacterMovies
