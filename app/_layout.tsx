import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { allRoutes } from '@/constants/Routes';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color';
import '../global.css';


export default function RootLayout() {

	const backgroundColor = useThemeColor({}, 'background')
	const colorScheme = useColorScheme()

	return (
		<GestureHandlerRootView
			style={{ backgroundColor, flex: 1}}
		>
			<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
				<Stack 
					screenOptions={{
						headerShadowVisible: false ,
						contentStyle: {
							backgroundColor
						},
						headerStyle: {
							backgroundColor
						}
					}}
				>
					<Stack.Screen 
						name='index'
						options={{
							title: 'Home Screen'
						}}
					/>

					{
						allRoutes.map(r => (
							<Stack.Screen 
								key={r.name}
								name={r.name}
								options={{
									title: r.title
								}}
							/>
						))
					}

				</Stack>
			</ThemeProvider>
		</GestureHandlerRootView>
	);
}
