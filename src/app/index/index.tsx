import { Category } from "@/components/category";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import { styles } from "./styles";

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />
                <TouchableOpacity>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>
            <Category name="Projeto" icon="code"/>
            <Category name="Site" icon="language"/>
            <Category name="Vídeo" icon="movie"/>
        </View>
    )
}