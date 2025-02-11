import { create } from "zustand"
import { persist } from "zustand/middleware"
interface State {
  theme: "light" | "dark"
  setTheme: (theme: string) => void
}
const useStore = create<State>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
    }),
    {
      name: "theme-storage",
    },
  ),
)

export default useStore
