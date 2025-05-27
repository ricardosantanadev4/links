import { Category } from "@/components/category"
import { categories } from "@/utils/categories"
import { FlatList } from "react-native"
import { styles } from "./styles"

export function Categories() {
    return (
        <FlatList
            data={categories}
            keyExtractor={(intem) => intem.id}
            renderItem={({ item }) => (
                <Category name={item.name} isSelected={false} icon={item.icon} />
            )}
            horizontal
            style={styles.container}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
        />
    )
}
