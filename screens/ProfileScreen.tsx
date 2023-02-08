import { Entypo, Feather } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet } from "react-native";
import pins from "../assets/data/pins";
import MasonryList from "../components/MasonryList";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export default function ProfileScreen() {
  const theme = useColorScheme();
  const color = Colors[theme].text;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icons}>
          <Feather name="share" size={24} color={color} style={styles.icon} />
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color={color}
            style={styles.icon}
          />
        </View>
        <View style={styles.imageBody}>
          <Image
            source={{ uri: "https://i.ibb.co/MkvrrKp/profile.gif" }}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Priyanshu Kapadia</Text>
        <Text style={styles.subtitle}>123, Follwers & 542 Followings</Text>
      </View>
      <MasonryList pins={pins} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
    marginLeft: 40,
  },
  imageBody: {
    width: 200,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 0,
  },
  image: {
    width: 160,
    aspectRatio: 1,
    borderRadius: 200,
  },
  subtitle: {
    fontWeight: "600",
    marginLeft: 20,
    marginBottom: 20,
  },
  header: {
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
});
