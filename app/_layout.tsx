import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../global.css';

import { allRoutes } from '@/constants/Routes';
import { useThemeColor } from '@/hooks/use-theme-color';
import { ThemeChagerProvider } from '@/presentation/context/ThemeChanger';


export default function RootLayout() {

	const backgroundColor = useThemeColor({}, 'background')

	return (
		<GestureHandlerRootView
			style={{ backgroundColor, flex: 1}}
		>
			<ThemeChagerProvider>
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
									title: r.title,
									headerShown: !r.title.includes('Slides')
								}}
							/>
						))
					}

				</Stack>
			</ThemeChagerProvider>
		</GestureHandlerRootView>
	);
}
