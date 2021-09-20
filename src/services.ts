import { API_BASE } from "./constants"
import * as t from 'runtypes'

const Character = t.Record({
  name: t.String,
  films: t.Array(t.String),
  url: t.String,
  homeworld: t.String,
})

const SearchResults = t.Record({
  count: t.Number,
  results: t.Array(Character)
})

export const fetchSearch = async (query: string) => {
  const results = await fetchCheckOk(`${API_BASE}/people/?search=${query}`)
  return SearchResults.check(results)
}

const Planet = t.Record({
  name: t.String,
  population: t.String,
})

export const fetchPlanet = async (url: string) => {
  const planet = await fetchCheckOk(url)
  return Planet.check(planet)
}

const fetchCheckOk = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`)
  }
  const json = await response.json()
  return json
}
