import { useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';
import { FadeInImage, ThemedView } from '@/presentation';

const InfiniteScrollScreen = () => {

	const primaryColor = useThemeColor({}, 'primary')
	const [numbres, setNumbres] = useState([1, 2, 3, 4, 5])

	const loadMore = () => {
		const newArray = Array.from({ length: 5 }, (_, i) => numbres.length + i)

		setTimeout(() => {
			setNumbres([...numbres, ...newArray])
		}, 3000);
	}

    return (
		<ThemedView>
			<FlatList 
				data={numbres}
				renderItem={({ item }) => <ListItem number={item} />}
				onEndReached={loadMore}
				onEndReachedThreshold={0.6}
				ListFooterComponent={() => (
					<View style={{ height: 150, justifyContent: 'center'}}>
						<ActivityIndicator size={50} color={primaryColor} /> 
					</View>
				)}
			/>
		</ThemedView>
    );
};
export default InfiniteScrollScreen;

interface ListItemProps {
	number: number
}

const ListItem = ({ number }: ListItemProps) => {
	return (
		
		<FadeInImage 
			uri={`https://picsum.photos/id/${number}/500/400`}
			style={{
				height: 400,
				width: '100%'
			}}
		/>
	)
}
