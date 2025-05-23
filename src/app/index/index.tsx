import { Category } from "@/components/category";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import { styles } from "./styles";
import { categories } from "@/utils/categories";

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />
                <TouchableOpacity>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>
            <Category name={categories[0].name} icon={categories[0].icon} isSelected />
            <Category name={categories[1].name} icon={categories[1].icon} isSelected={false} />
            <Category name={categories[2].name} icon={categories[2].icon} isSelected={false} />
        </View>
    )
}