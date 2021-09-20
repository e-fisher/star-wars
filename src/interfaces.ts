import { Static } from 'runtypes'
import { Movie } from './services'

// TODO add other types?
export type MovieType = Static<typeof Movie>
