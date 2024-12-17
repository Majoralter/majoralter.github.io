import { onMounted, ref } from "vue";
import { useThemeStore } from "@/store/themeStore";

export const useTheme = () => {
  const themeStore = useThemeStore();

  const currentTheme = ref(themeStore.currentTheme),
    isDarkMode = ref(themeStore.isDarkMode),
    toggleTheme = themeStore.toggleTheme;

  onMounted(() => {
    themeStore.initializeTheme();
  });

  return {
    currentTheme,
    isDarkMode,
    toggleTheme,
  };
};
