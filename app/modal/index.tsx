import { ThemedButton, ThemedView } from '@/presentation';
import { router } from 'expo-router';

const ModalScreen = () => {
	return (
		<ThemedView>
			<ThemedButton
				onPress={() => router.push('/modal/modal-window')}
				className='mx-4 mt-20'
			>
				Abrir Modal
			</ThemedButton>
		</ThemedView>
	);
};
export default ModalScreen;
