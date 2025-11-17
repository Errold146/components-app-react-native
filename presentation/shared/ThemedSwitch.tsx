import { Pressable, Switch, View } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';
import ThemedText from './ThemeText';

interface Props {
    text?: string
    value: boolean
    className?: string
    onValueChange: (value: boolean) => void
}

export default function ThemedSwitch({ text, value, className, onValueChange }: Props) {

    const switchActiveColor = useThemeColor({}, 'primary')

    return (
        <Pressable 
            className={`${className} flex flex-row items-center justify-between active:opacity-80 px-4 mx-2`}
            onPress={() => onValueChange(!value)}
        >
            {text ? <ThemedText type='h2'>{text}</ThemedText> : <View />}
            <Switch 
                value={value}
                onValueChange={onValueChange}
                thumbColor={value ? switchActiveColor : '#90A1B9'}
                trackColor={{
                    false: '#90A1B9',
                    true: switchActiveColor
                }}
            />
        </Pressable>
    )
}