import { TextInput, TextInputProps } from 'react-native'

interface Props extends TextInputProps {
    className?: string
}

export default function ThemedInput({ className, ...rest }: Props) {
    return (
        <TextInput 
            className={`${className} py-4 px-2 text-black dark:text-white`}
            placeholderTextColor='grey'
            {...rest}
        />
    )
}