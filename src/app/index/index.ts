import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1, // Faz com que o elemento ocupe todo espaço disponível na tela
        justifyContent: "center", // Centraliza o elemento na vertical
        alignItems: "center", // Centraliza o elemento na horizontal
    },

    title: {
        color: colors.green[900],
        fontSize: 22
    }
})