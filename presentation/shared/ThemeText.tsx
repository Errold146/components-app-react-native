import { Text, TextProps } from 'react-native'

type TextType = 'normal' | 'h1' | 'h2' | 'semiBold' | 'link'

interface Props extends TextProps {
    className?: string
    type?: TextType
}

export default function ThemeText({  className, type, children, ...rest }: Props ) {
    return (
        <Text 
            className={[
                'text-ligth-text dark:text-dark-text',
                type === 'normal' ? 'font-normal' : undefined,
                type === 'h1' ? 'text-3xl' : undefined,
                type === 'h2' ? 'text-xl' : undefined,
                type === 'semiBold' ? 'font-bold text-lg' : undefined,
                type === 'link' ? 'font-normal underline' : undefined,
                className

            ].join(' ')}
            {...rest}
        >
            { children }
        </Text>
    )
}