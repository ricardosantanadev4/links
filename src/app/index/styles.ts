import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 62,
        flex: 1, // Faz com que o elemento ocupe todo espaço disponível na tela
    },

    title: {
        color: colors.green[900],
        fontSize: 22,
    },

    header: {
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 32,
    },

    logo: {
        height: 32,
        width: 38,
    }
})
