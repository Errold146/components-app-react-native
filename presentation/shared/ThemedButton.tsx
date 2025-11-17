import { ReactNode } from 'react'
import { Pressable, PressableProps, Text } from 'react-native'

interface Props extends PressableProps {
    className?: string
    children: ReactNode
}

export default function ThemedButton({ children, className, ...rest }: Props) {
    return (
        <Pressable
            className={`bg-ligth-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
            { ...rest }
        >
            <Text className='text-white text-2xl'>{children}</Text>
        </Pressable>
    )
}