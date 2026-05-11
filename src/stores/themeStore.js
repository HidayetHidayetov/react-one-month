import { create } from 'zustand';

const themeStore = create((set) => ({
    theme: 'light',
    setTheme: (theme) => set({ theme }),
    toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}))

export default themeStore;