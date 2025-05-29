import { Categories } from "@/components/categories"
import { Link } from "@/components/link"
import { Option } from "@/components/option"
import { linksStorage, LinkStorage } from "@/storage/link-storage"
import { categories } from "@/utils/categories"
import { MaterialIcons } from "@expo/vector-icons"
import { router, useFocusEffect } from "expo-router"
import { useCallback, useState } from "react"
import { Alert, FlatList, Image, Linking, Modal, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../../styles/colors"
import { styles } from "./styles"


export default function Index() {
    const [showModal, setShowModal] = useState(false)
    const [link, setLink] = useState<LinkStorage>({} as LinkStorage)
    const [links, setLinks] = useState<LinkStorage[]>([])
    const [category, setCategory] = useState(categories[0].name)

    async function getLinks() {
        try {
            const response = await linksStorage.get()
            const filtred = response.filter((link) => link.category === category)
            setLinks(filtred)
        } catch (error) {
            Alert.alert("Erro", "Não foi possóvel listar os links")
        }
    }

    function handleDatails(selected: LinkStorage) {
        setShowModal(true)
        setLink(selected)
    }

    async function linkRemove() {
        try {
            await linksStorage.remove(link.id)
            getLinks()
            setShowModal(false)
        } catch (error) {
            Alert.alert("Erro", "Não foi possível excluir")
            console.log(error)
        }

    }

    function handleRemove() {
        Alert.alert("Excluir", "Deseja realmente excluir?", [
            { style: "cancel", text: "Não" },
            { text: "Sim", onPress: linkRemove }
        ])
    }

    async function handleOpen() {
        try {
            await Linking.openURL(link.url)
        } catch (error) {
            Alert.alert("Link", "Não foi possível abrir o link")
            console.log(error)
        }
    }

    useFocusEffect(useCallback(() => {
        getLinks()
    }, [category]))

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
                <Link name={item.name} url={item.url} onDetails={() => handleDatails(item)} />
            )}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false} // Desabilita a rolagem na vertical
            />

            <Modal transparent visible={showModal} animationType="slide">
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>{link.category}</Text>
                            <TouchableOpacity onPress={() => setShowModal(false)}>
                                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalLinkName}>{link.name}</Text>
                        <Text style={styles.modaUrl}>{link.url}</Text>

                        <View style={styles.modalFooter}>
                            <Option name="Excluir" icon="delete" variant="secondary" onPress={handleRemove} />
                            <Option name="Abrir" icon="language" onPress={handleOpen} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
