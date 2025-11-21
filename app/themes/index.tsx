import { useState } from 'react';

import { ThemedCard, ThemedSwitch, ThemedView } from '@/presentation';
import { useThemeChagerContext } from '@/presentation/context/ThemeChanger';

const ThemesScreen = () => {

	const { toggleTheme, currentTheme, systemTheme, setSystemTheme } = useThemeChagerContext()
	const [darkModeSettings, setDarkModeSettings] = useState({
		darkMode: currentTheme === 'dark',
		systemMode: systemTheme
	})

	const setDarkMode = (value: boolean) => {

		toggleTheme()

		setDarkModeSettings({
			darkMode: value,
			systemMode: false
		})
	}
	
	const setSystemMode = (value: boolean) => {

		if ( value ) {
			setSystemTheme()
		}
		
		setDarkModeSettings({
			darkMode: false,
			systemMode: value
		})
	}

    return (
		<ThemedView margin>
			<ThemedCard className='mt-5'>
				<ThemedSwitch 
					text='Dark Mode'
					value={darkModeSettings.darkMode}
					onValueChange={setDarkMode}
				/>
				
				<ThemedSwitch 
					text='System Mode'
					value={darkModeSettings.systemMode}
					onValueChange={setSystemMode}
				/>
			</ThemedCard>
		</ThemedView>
    );
};
export default ThemesScreen;
