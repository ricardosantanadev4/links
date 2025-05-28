import { Button } from "@/components/button"
import { Categories } from "@/components/categories"
import { Input } from "@/components/input"
import { linksStorage } from "@/storage/link-storage"
import { colors } from "@/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useState } from "react"
import { Alert, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export default function Add() {

    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

    async function handleAdd() {
        try {
            if (!category) {
                return Alert.alert("Categoria", "Selecione uma categoria")
            }

            if (!name.trim()) {
                return Alert.alert("Nome", "Informe um nome")
            }

            if (!url.trim()) {
                return Alert.alert("URL", "Informe uma URL")
            }

            await linksStorage.save({
                id: new Date().getTime().toString(),
                name,
                url,
                category
            })

        } catch (erro) {
            Alert.alert("Erro", "Não foi possível salvar o link")
            console.log(erro)
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>

                <Text style={styles.title}>Novo</Text>
            </View>

            <Text style={styles.label}>Selecione uma categoria</Text>

            <Categories selected={category} onChange={setCategory} />

            <View style={styles.form}>
                <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />
                <Input placeholder="URL" onChangeText={setUrl} autoCorrect={false} autoCapitalize="none" />
                <Button title="Adicionar" onPress={handleAdd} />
            </View>
        </View>
    )
}
