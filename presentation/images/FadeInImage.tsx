import { useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native'

import { useAnimation } from '@/hooks/useAnimation'

interface Props {
    uri: string
    style: StyleProp<ImageStyle>
}

export default function FadeInImage({ uri, style }: Props) {

    const [isLoading, setIsLoading] = useState(true)
    const { animatedOpacity, fadeIn } = useAnimation()

    return (
        <View
            style={{
               justifyContent: 'center',
               alignItems: 'center'
            }}
        >
            {
                isLoading && (
                    <ActivityIndicator 
                        size={20} 
                        style={{ position: 'absolute' }}
                        color="grey"
                    />
                )
            }
            <Animated.Image 
                source={{ uri }}
                style={[ style, { opacity: animatedOpacity } ]}
                onLoadEnd={() => {
                    fadeIn({})
                    setIsLoading(false)
                }}
            />
        </View>
    )
}