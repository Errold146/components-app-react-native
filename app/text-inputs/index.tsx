
import { ThemedCard, ThemedInput, ThemedText, ThemedView } from '@/presentation';
import { useState } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

const TextInputsScreen = () => {

	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: '',
	})

	return (
		<KeyboardAvoidingView
			behavior='height'
		>
			<ScrollView className='mb-14'>
				<ThemedView margin>
					<ThemedCard className='mb-5'>
						<ThemedInput 
							onChangeText={text => setForm({...form, name: text})}
							placeholder='Nombre Completo'
							autoCapitalize={'words'}
							className='bg-gray-100 dark:bg-gray-800 mb-2 rounded-lg'
						/>
						
						<ThemedInput 
							onChangeText={text => setForm({...form, email: text})}
							keyboardType={'email-address'}
							placeholder='Correo Electrónico'
							className='bg-gray-100 dark:bg-gray-800 mb-2 rounded-lg'
						/>
						
						<ThemedInput 
							onChangeText={text => setForm({...form, phone: text})}
							keyboardType={'phone-pad'}
							placeholder='Número Celular'
							className='bg-gray-100 dark:bg-gray-800 rounded-lg'
						/>
					</ThemedCard>

					<ThemedCard className='my-2'>
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>

					<ThemedCard className='my-2'>
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>

					<ThemedCard className='my-2'>
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>

					<ThemedCard className='my-2'>
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>

					<ThemedCard className='my-2'>
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>

					<ThemedCard className='my-2'>
						<ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
					</ThemedCard>

					<ThemedCard className='mb-16'>
						<ThemedInput 
							onChangeText={text => setForm({...form, phone: text})}
							keyboardType={'phone-pad'}
							placeholder='Número Celular'
							className='bg-gray-100 dark:bg-gray-800 rounded-lg'
						/>
					</ThemedCard>

				</ThemedView>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};
export default TextInputsScreen;
