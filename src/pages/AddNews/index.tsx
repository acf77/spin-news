import React from "react";

import { useNavigation } from "@react-navigation/core";

import { SafeAreaView, Text, View } from "react-native";
import { Input } from "../../Components/Input";
import { styles } from "./styles";
import { Profile } from "../../Components/Profile";
import { Button } from "../../Components/Button";

export function AddNews() {

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <Profile />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Crie uma nova notícia</Text>
        <Text style={styles.subtitle}>Título da notícia</Text>
        <Input title="Título da notícia" />
        <Text style={styles.subtitle}>Conteúdo da notícia</Text>
        <Input title="Conteúdo da notícia" />
        <Text style={styles.subtitle}>Autor</Text>
        <Input title="Nome do autor" />
        <View style={styles.button} >
          <Button title="Salvar notícia" onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default AddNews;
