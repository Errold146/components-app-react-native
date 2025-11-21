import { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';
import { ThemedText, ThemedView } from '@/presentation';

const PullToRefreshScreen = () => {

	const primaryColor = useThemeColor({}, 'primary')
	const secondaryColor = useThemeColor({}, 'secondary')
	const successColor = useThemeColor({}, 'success')
	const backgroundColor = useThemeColor({
		dark: '#111827', light: '#d1d5db'
	}, 'background')

	const [isRefreshing, setIsRefreshing] = useState(false)

	const onRefresh = async () => {
		setIsRefreshing(true)

		setTimeout(() => {
			setIsRefreshing(false)
		}, 3000);
	}

	return (
		<ScrollView
			refreshControl={
				<RefreshControl 
					refreshing={isRefreshing}
					onRefresh={onRefresh}
					colors={[ primaryColor, secondaryColor, successColor ]}
					progressBackgroundColor={backgroundColor}

				/>
			}
		>
			<ThemedView margin>
				<ThemedText>PullToRefreshScreen</ThemedText>
			</ThemedView>
		</ScrollView>
	);
};
export default PullToRefreshScreen;
