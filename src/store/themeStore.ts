import { defineStore } from "pinia";

export type Theme = "light" | "dark";

export const useThemeStore = defineStore("theme", {
  state: (): { currentTheme: Theme } => ({
    currentTheme: "dark",
  }),
  getters: {
    isDarkMode: (state) => state.currentTheme === "dark",
  },
  actions: {
    initializeTheme() {
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      if (savedTheme) {
        this.currentTheme = savedTheme;
      } else {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        this.currentTheme = prefersDark ? "dark" : "light";
      }
      this.applyTheme();
    },
    toggleTheme() {
      this.currentTheme = this.currentTheme === "light" ? "dark" : "light";
      this.applyTheme();
      console.log(this.currentTheme);
    },
    applyTheme() {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(this.currentTheme);
      localStorage.setItem("theme", this.currentTheme);
    },
  },
});
