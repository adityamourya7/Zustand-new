import { create } from "zustand"

export const useNameStore = create((set) => ({
    name: '',
    setName: (name) => set({ name: name })
})) 