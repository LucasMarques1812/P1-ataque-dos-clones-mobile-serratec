import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const acessar = () => {
    navigation.navigate("Feed");
    navigation.reset({
      index: 0,
      routes: [{ name: "Feed" }],
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#FFF" transLucent={false} />

          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />

          <TextInput
            placeholder="Celular, username ou email"
            style={styles.input}
          />
          <TextInput
            placeholder="Sua senha"
            style={styles.input}
            secureTextEntry={true}
          />

          <View style={styles.forgotContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            title="Acessar"
            onPress={() => acessar()}
          >
            <Text style={styles.loginText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.facebookContainer}>
            <FontAwesome5 name="facebook" size={25} color="#399fff" />
            <Text style={styles.facebookText}>
              Continue como Lucas M. Lisboa
            </Text>
          </TouchableOpacity>

          <View style={styles.divisor}>
            <View style={styles.divisorLine}></View>
            <Text style={{ marginHorizontal: "3%" }}>OU</Text>
            <View style={styles.divisorLine}></View>
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Não possui uma conta?</Text>
            <TouchableOpacity>
              <Text style={styles.signUpButton}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: Platform.OS === "android" ? "10%" : "10%",
    marginBottom: Platform.OS === "android" ? "13%" : "15%",
  },
  input: {
    width: "90%",
    height: 42,
    backgroundColor: "#F4F3F3",
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  forgotContainer: {
    width: "90%",
    alignItems: "flex-end",
  },
  forgotText: {
    color: "#399fff",
  },
  loginButton: {
    marginTop: "5%",
    backgroundColor: "#399fff",
    width: "90%",
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  loginText: {
    color: "#fff",
    fontSize: 17,
  },
  facebookContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "15%",
  },
  facebookText: {
    color: "#399fff",
    paddingLeft: 8,
    fontSize: 15,
  },
  divisor: {
    marginTop: "10%",
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  divisorLine: {
    width: "45%",
    height: 2,
    backgroundColor: "#EFEDED",
    borderRadius: 5,
  },
  signUpContainer: {
    flexDirection: "row",
    marginTop: "10%",
    marginBottom: "15%",
  },
  signUpText: {
    color: "#c4c4c4",
    paddingRight: 5,
  },
  signUpButton: {
    color: "#399fff",
    fontWeight: "bold",
  },
});
