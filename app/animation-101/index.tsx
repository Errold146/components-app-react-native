import { useAnimation } from '@/hooks/useAnimation'
import { ThemedButton, ThemedView } from '@/presentation'
import { Animated, Easing } from 'react-native'

export default function Animation101Screen() {

	const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingFromTop } = useAnimation()

    return (
		<ThemedView 
			margin
			className='flex-1 items-center justify-center'
		>
			<Animated.View 
				className='bg-ligth-secondary dark:bg-ligth-secondary rounded-xl mb-5'
				style={{
					width: 150,
					height: 150,
					opacity: animatedOpacity,
					transform: [{
						translateY: animatedTop
					}]
				}}
			/>

			<ThemedButton
				onPress={() =>  {
					fadeIn({})
					startMovingFromTop({
						easing: Easing.bounce,
						duration: 700
					})
				}}
				className='my-3'
			>
				FadeIn
			</ThemedButton>
			
			<ThemedButton
				onPress={() => {
					fadeOut({})
				}}
				className='my-3'
			>
				FadeOut
			</ThemedButton>
		</ThemedView>
    )
}
