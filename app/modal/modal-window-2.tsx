import { ThemedButton, ThemedText, ThemedView } from "@/presentation";
import { router } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

export default function modalScreen() {
    return (
        <ThemedView 
            className="flex-1 justify-center items-center gap-4"
            bgColor="#4c1d95"
        >
            <ThemedText className="mb-4">Hola, soy el SEGUNDO modal</ThemedText>

            <ThemedButton
                onPress={() => router.back()}
            >
                Modal Anterior
            </ThemedButton>

            <ThemedButton
                onPress={() => router.dismissAll()}
            >
                Cerrar Modal
            </ThemedButton>

            <StatusBar 
                style={ Platform.OS === 'ios' ? 'light' : 'auto'}
            />
        </ThemedView>
    )
}