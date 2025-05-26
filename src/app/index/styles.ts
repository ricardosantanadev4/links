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
    },

    links: {
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
    },

    linksContent: {
        gap: 20,
        padding: 24,
        paddingBottom: 100,
    },

    modal: {
        flex: 1,
        justifyContent: "flex-end", // Faz com que o conteúdo fique em baixo na tela
    },

    modalContent: {
        backgroundColor: colors.gray[900],
        borderTopWidth: 1,
        borderTopColor: colors.gray[800],
        paddingBottom: 32,
        padding: 24
    },

    modalHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 42,
    },

    modalCategory: {
        flex: 1,
        fontSize: 16,
        fontWeight: 500,
        color: colors.gray[400]
    },

    modalLinkName: {
        fontSize: 18,
        fontWeight: 600,
        color: colors.gray[200]
    },

    modaUrl: {
        fontSize: 14,
        color: colors.gray[400],
    }
})
