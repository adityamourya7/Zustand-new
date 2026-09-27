import { create } from "zustand"

export const useTodoStore = create((set) => ({
    todo: [],
    addTodo: (id, title) => set((state) => ({ todo: [...state.todo, { id, title }] })),
    removeTodo: (id) => set((state) => ({ todo: state.todo.filter((todo) => todo.id !== id) }))
}))