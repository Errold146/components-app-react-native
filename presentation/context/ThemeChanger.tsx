import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from "nativewind";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

interface ThemeChangerType {
    currentTheme: 'light' | 'dark'
    systemTheme: boolean
    toggleTheme: () => void
    setSystemTheme: () => void
}

// Crear el context
const ThemeChager = createContext({} as ThemeChangerType)

// Craer un hook para consumir el context
export const useThemeChagerContext = () => {
    const themeChanger = useContext(ThemeChager)
    return themeChanger;
}

// Provider
export const ThemeChagerProvider = ({ children }: PropsWithChildren) => {

    const { colorScheme, setColorScheme } = useColorScheme()
    const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark')
    const [isSystemThemeEnable, setIsSystemThemeEnable] = useState(true)

    const currentTheme = isSystemThemeEnable ? colorScheme : (isDarkMode) ? 'dark' : 'light'

    useEffect(() => {
        AsyncStorage.getItem('selected-theme').then(theme => {
            if ( !theme ) return;

            setIsDarkMode( theme === 'dark' )
            setIsSystemThemeEnable( theme === 'system' )
            setColorScheme( theme as 'light' | 'dark' | 'system' )
        })
    }, [])
    

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <ThemeChager.Provider
                value={{
                    currentTheme: currentTheme ?? 'light',
                    systemTheme: isSystemThemeEnable,
                    toggleTheme: async () => {
                        setIsDarkMode(!isDarkMode)
                        setColorScheme( isDarkMode ? 'light' : 'dark')
                        setIsSystemThemeEnable(false)

                        await AsyncStorage.setItem('selected-theme', isDarkMode ? 'light' : 'dark')
                    },
                    setSystemTheme: async () => {
                        setIsSystemThemeEnable(true)
                        setColorScheme('system')

                        await AsyncStorage.setItem('selected-theme', 'system')
                    }
                }}
            >
                { children }
            </ThemeChager.Provider>
        </ThemeProvider>
    )
}