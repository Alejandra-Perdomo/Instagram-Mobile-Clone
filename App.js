import { View, Text,StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen/> */}
      <NewPostScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:22
  }
})

