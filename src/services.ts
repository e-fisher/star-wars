import { API_BASE } from "./constants"
import * as t from 'runtypes'

export const Character = t.Record({
  name: t.String,
  films: t.Array(t.String),
  url: t.String,
  homeworld: t.String,
  species: t.Array(t.String)
})

const SearchResults = t.Record({
  count: t.Number,
  results: t.Array(Character)
})

export const fetchSearch = async (query: string) => {
  const results = await fetchCheckOk(`${API_BASE}/people/?${query}`)
  return SearchResults.check(results)
}

export const Planet = t.Record({
  name: t.String,
  population: t.String,
})

export const fetchPlanet = async (url: string) => {
  const planet = await fetchCheckOk(url)
  return Planet.check(planet)
}

export const Movie = t.Record({
  title: t.String,
  release_date: t.String,
  opening_crawl: t.String,
  url: t.String,
})

const fetchMovie = async (url: string) => {
  const movie = await fetchCheckOk(url)
  return Movie.check(movie)
}

export const fetchMovies = async (urls: string[]) => {
  return Promise.all(urls.map((url) => fetchMovie(url)))
}

export const Species = t.Record({
  name: t.String
})

const fetchSpecies = async (url: string) => {
  const species = await fetchCheckOk(url)
  return Species.check(species)
}

export const fetchMultipleSpecies = async (urls: string[]) => {
  return Promise.all(urls.map((url) => fetchSpecies(url)))
}

const fetchCheckOk = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`)
  }
  const json = await response.json()
  return json
}
