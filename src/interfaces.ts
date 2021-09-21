import { Static } from 'runtypes'
import { Movie, Character, Planet, Species } from './services'

export type MovieType = Static<typeof Movie>
export type CharacterType = Static<typeof Character>
export type PlanetType = Static<typeof Planet>
export type SpeciesType = Static<typeof Species>
