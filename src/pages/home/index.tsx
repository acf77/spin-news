import React from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";

import { useNavigation } from "@react-navigation/core";

import { styles } from "./styles";

import { Input } from "../../Components/Input";
import { Profile } from "../../Components/Profile";
import { Button } from "../../Components/Button";

export function Home() {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Profile />
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <Text style={styles.title}>Busca de notícias</Text>
            <Input title="Busque uma palavra-chave ou trecho" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Buscar" onPress={() => navigation.navigate('AddNews')} />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
