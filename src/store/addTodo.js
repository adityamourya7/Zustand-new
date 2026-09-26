import { create } from "zustand"

export const useTodoStore = create((set) => ({
    todo: [],
    addTodo: (task) => set((state) => ({
        todo: [...state.todo, task]
    }))
}))