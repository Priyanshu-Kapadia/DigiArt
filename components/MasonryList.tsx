import { StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import React from "react";
import { View } from "../components/Themed";

import Pin from "../components/Pin";

interface IMasonaryList {
  pins: {
    id: string;
    image: string;
    title: string;
  }[]
}

const MasonryList = ({ pins }: IMasonaryList) => {
  const width = useWindowDimensions().width;
  
  const numColums = Math.ceil(width/350);
  
  return (
    <ScrollView>
      <View style={styles.container}>
        {Array.from(Array(numColums)).map((col, colIndex) => (
          <View style={styles.column} key={`column_${colIndex}`}>
            {pins
              .filter((_, index) => index % numColums === colIndex)
              .map((pin) => (
                <Pin pin={pin} key={pin.id} />
              ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MasonryList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
});
