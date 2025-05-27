import { colors } from "@/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

type Props = {
    name: string
    url: string
    onDetails: () => void
}

export function Link({ name, url, onDetails }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.name} numberOfLines={1}>
                    {name}
                </Text>
            </View>

            <Text style={styles.url} numberOfLines={1}>
                {url}
            </Text>
            <TouchableOpacity onPress={onDetails}>
                <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]}></MaterialIcons>
            </TouchableOpacity>
        </View>
    )
}
