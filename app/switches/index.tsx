import { ThemedCard, ThemedSwitch, ThemedView } from '@/presentation';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

const Switches = () => {

	const [state, setState] = useState({
		isActive: true,
		isHungry: false,
		isHappy: true
	})

  return (
		
		<ThemedView margin className='mt-2 '>
			<ThemedCard>
				<ThemedSwitch 
					value={state.isActive}
					onValueChange={value => setState({ ...state, isActive: value })}
					text='Activo'
					className='mb-4'
				/>
				
				<ThemedSwitch 
					value={state.isHungry}
					onValueChange={value => setState({ ...state, isHungry: value })}
					text='Hambriento'
					className='mb-4'
				/>
				
				<ThemedSwitch 
					value={state.isHappy}
					onValueChange={value => setState({ ...state, isHappy: value })}
					text='Feliz'
					className='mb-4'
				/>
			</ThemedCard>
		</ThemedView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Switches;