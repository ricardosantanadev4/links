import { Button } from "@/components/button"
import { Categories } from "@/components/categories"
import { Input } from "@/components/input"
import { colors } from "@/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useState } from "react"
import { Alert, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export default function Add() {
    const [categoy, setCategory] = useState("")
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

    function handleAdd() {
        if (!categoy) {
            return Alert.alert("Categoria", "Selecione uma categoria")
        }

        if (!name.trim()) {
            return Alert.alert("Nome", "Informe um nome")
        }

        if (!url.trim()) {
            return Alert.alert("URL", "Informe uma URL")
        }

        console.log({ categoy, name, url })
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

            <Categories selected={categoy} onChange={setCategory} />

            <View style={styles.form}>
                <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />
                <Input placeholder="URL" onChangeText={setUrl} autoCorrect={false} />
                <Button title="Adicionar" onPress={handleAdd} />
            </View>
        </View>
    )
}
