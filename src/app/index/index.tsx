import { Categories } from "@/components/categories"
import { Link } from "@/components/link"
import { Option } from "@/components/option"
import { linksStorage, LinkStorage } from "@/storage/link-storage"
import { categories } from "@/utils/categories"
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useEffect, useState } from "react"
import { Alert, FlatList, Image, Modal, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../../styles/colors"
import { styles } from "./styles"

export default function Index() {
    const [links, setLinks] = useState<LinkStorage[]>([])
    const [category, setCategory] = useState(categories[0].name)

    async function getLinks() {
        try {
            const response = await linksStorage.get()
            setLinks(response)
        } catch (error) {
            Alert.alert("Erro", "Não foi possóvel listar os links")
        }
    }

    useEffect(() => {
        console.log('Chamou useEffect()')
        getLinks()
    }, [category])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />
                <TouchableOpacity onPress={() => router.navigate("/add")}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>

            <Categories selected={category} onChange={setCategory} />

            <FlatList data={links} keyExtractor={item => item.id} renderItem={({ item }) => (
                <Link name={item.name} url={item.url} onDetails={() => console.log('Clicou!')} />
            )}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false} // Desabilita a rolagem na vertical
            />

            <Modal transparent visible={false}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>Curso</Text>
                            <TouchableOpacity>
                                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalLinkName}>Rockeatset</Text>
                        <Text style={styles.modaUrl}>https://www.rocketseat.com.br/</Text>

                        <View style={styles.modalFooter}>
                            <Option name="Excluir" icon="delete" variant="secondary" />
                            <Option name="Abrir" icon="language" />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
