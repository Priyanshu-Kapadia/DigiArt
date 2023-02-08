import React, { useState, useEffect } from "react";
import { Button, Image, Platform, TextInput, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { View } from "../components/Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export default function CreatePinScreen() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");

  const colorScheme = useColorScheme();

  const onSubmit = () => {

  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.root}>
      <Button title="Upload your Pin" onPress={pickImage} />
      {image && (
        <>
          <Image
            source={{ uri: image }}
            style={styles.image}
          />
          <TextInput
            placeholder="Title..."
            style={[
              styles.input,
              {
                borderColor: Colors[colorScheme].text,
                color: Colors[colorScheme].text,
              },
            ]}
            value={title}
            onChangeText={setTitle}
            placeholderTextColor={Colors[colorScheme].text}
          />
          <Button title="Submit Pin" onPress={onSubmit}/>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  image: { 
    width: "100%", 
    aspectRatio: 1, 
    marginVertical: 20, 
    borderRadius: 10 
  },
  input: {
    borderWidth: 1,
    padding: 8,
    width: "100%",
    borderRadius: 10,
    marginBottom: 20
  },
});
