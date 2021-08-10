import { StyleSheet } from "react-native";
import { fonts } from "../../global/styles/fonts";
export const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: fonts.title,
    fontSize: 28,
    padding: 10,
    alignSelf: "center",
  },
  input: {
    alignSelf: "center",
    justifyContent: "center",
    padding: 1,
  },
  buttonContainer: {
    padding: 15,
  },
});
