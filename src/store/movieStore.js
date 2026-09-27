import { create } from "zustand"

export const useMovieStore = create((set) => ({
    movies: [],
    addMovie: (title, rating) => set((state) => ({
        movies: [...state.movies, { title, rating }],
    }))
}))

