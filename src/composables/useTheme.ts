import { ref, computed, onMounted } from 'vue'

export type Theme = 'light' | 'dark'

export const useTheme = () => { 
    const currentTheme = ref<Theme>('light')
    const isDarkMode = computed(() => currentTheme.value === 'dark')

    const toggleTheme = () => {
        currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
        applyTheme(currentTheme.value)
    }

    const applyTheme = (theme: Theme) => {
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(theme)
        localStorage.setItem('theme', theme)
    }

    onMounted(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null
        if (savedTheme) {
            currentTheme.value = savedTheme
        } else {
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
            currentTheme.value = prefersDarkMode ? 'dark' : 'light'
            
        }
        applyTheme(currentTheme.value);
    })

    return {
        currentTheme,
        isDarkMode,
        toggleTheme
    }
} 