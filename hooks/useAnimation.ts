import { useRef } from "react"
import { Animated, Easing } from "react-native"

export const useAnimation = () => {
    
    const animatedOpacity = useRef( new Animated.Value(0) ).current
    const animatedTop = useRef( new Animated.Value(0) ).current

    const fadeIn = ({ 
        duration = 300, 
        toValue = 1, 
        useNativeDriver = true, 
        easing = Easing.linear,
        callBack = () => {}
    }) => {
        Animated.timing(animatedOpacity, {
            toValue,
            duration,
            useNativeDriver, 
            easing
        }).start( callBack )
    }
    
    const fadeOut = ({ 
        duration = 300, 
        toValue = 0, 
        useNativeDriver = true, 
        easing = Easing.ease,
        callBack = () => {}
    }) => {
        Animated.timing(animatedOpacity, {
            toValue,
            duration,
            useNativeDriver,
            easing
        }).start( callBack )
    }

    const startMovingFromTop = ({ 
        initialPsition = -100,
        duration = 700, 
        toValue = 0, 
        useNativeDriver = true, 
        easing = Easing.ease,
        callBack = () => {}
    }) => {
        
        animatedTop.setValue(initialPsition)

        Animated.timing( animatedTop, {
            toValue,
            duration,
            useNativeDriver,
            easing,
        }).start(callBack)
    }
    
    return {
        animatedOpacity,
        animatedTop, 
        fadeIn,
        fadeOut,
        startMovingFromTop
    }
}
