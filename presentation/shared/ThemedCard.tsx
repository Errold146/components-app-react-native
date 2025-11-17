import { View, ViewProps } from 'react-native'

interface Props extends ViewProps {
    className?: string
}

export default function ThemedCard({ className, children, ...rest }: Props) {
    return (
        <View 
            className={`bg-white dark:bg-black/20 rounded-xl p-2 shadow shadow-black/5 ${className}`}
            {...rest}
        >
            {children}
        </View>
    )
}