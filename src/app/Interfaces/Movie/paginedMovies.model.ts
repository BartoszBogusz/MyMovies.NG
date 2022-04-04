import { Movie } from "./movie.model";

export interface PaginedMovies {
    items: Movie[],
    itemsFrom: number,
    itemsTo: number,
    totalItemsCount: number,
    totalPages: number
}