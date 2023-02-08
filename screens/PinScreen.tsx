import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
  ScrollView,
} from "react-native";
import pins from "../assets/data/pins";
import { useState, useEffect } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";

import Lottie from "lottie-react-native";

const PinScreen = () => {
  const [ratio, setRatio] = useState(1);

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const route = useRoute();

  const pinId = route.params?.id;

  const pin = pins.find((p) => p.id === pinId);
  const windowHeight = Dimensions.get("window").height;

  useEffect(() => {
    if (pin.image) {
      Image.getSize(pin.image, (width, height) =>
        windowHeight >= 1080
          ? setRatio(width / (height / 1.1))
          : setRatio(width / height)
      );
    }
  }, [pin]);

  const goBack = () => {
    navigation.goBack();
  };

  if (!pin) {
    return <Text>Pin is not Found</Text>;
  }

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <StatusBar style="light" />
      <ScrollView style={{
        height: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        // flex: 1
      }}>
        <View style={styles.view1}>
          <ReactNativeZoomableView
            maxZoom={1.5}
            minZoom={1}
            zoomStep={0.5}
            initialZoom={1}
            bindToBorders={true}
            style={{
              justifyContent: "flex-start",
            }}
          >
            <Image
              source={{ uri: pin.image }}
              style={[styles.image, { aspectRatio: ratio }]}
            />
          </ReactNativeZoomableView>
        </View>
        <View style={styles.view2}>
          <Text style={styles.title}>{pin.title}</Text>
          <Text style={styles.title}>Made By Priyanshu</Text>
          <Lottie source={require("../assets/pencil.json")} autoPlay loop style={{
            height: 80
          }}/>
        </View>
      </ScrollView>
      <Pressable
        onPress={goBack}
        style={[styles.backBtn, { top: insets.top + 20 }]}
      >
        <Ionicons name={"chevron-back"} size={35} color={"black"} />
      </Pressable>
    </SafeAreaView>
  );
};

export default PinScreen;

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  view2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },
  image: {
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  title: {
    margin: 5,
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 35,
  },
  backBtn: {
    position: "absolute",
    left: 20,
  },
});
