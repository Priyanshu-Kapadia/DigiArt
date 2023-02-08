import { AntDesign } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet } from "react-native";
import { Text, View } from "./Themed";

import { useState, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

const Pin = (props: { pin: { id: string; image: string; title: string; } }) => {
  const { id, image, title } = props.pin;

  const [ratio, setRatio] = useState(1);

  const navigation = useNavigation();

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);

  const onLike = () => {};

  const goToPinPage = () => {
    navigation.navigate("Pin", { id })
  };

  return (
    <Pressable style={styles.pin} onPress={goToPinPage}>
      <View>
        <Image
          source={{ uri: image }}
          style={[styles.image, { aspectRatio: ratio }]}
        />

        <Pressable onPress={onLike} style={styles.heartBtn}>
          <AntDesign name="hearto" size={24} color="black" />
        </Pressable>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Pin;

const styles = StyleSheet.create({
  pin: {
    width: "100%",
    padding: 5,
  },

  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    margin: 5,
  },

  image: {
    width: "100%",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "black",
    aspectRatio: 1 / 2,
  },
  heartBtn: {
    backgroundColor: "#D3CFD4",
    position: "absolute",
    bottom: 15,
    right: 15,
    padding: 8,
    borderRadius: 50,
  },
});
