import {StyleSheet, Image, View, Text} from "react-native"
import React from "react"

const Avatar = ({line}) => {
  return (
    <View style={[styles.circle, line && styles.circleLine]}>
      <Image
        source={{uri: "https://picsum.photos/200"}}
        style={styles.circleImage}
      />
      <Text style={styles.text}>Biryani</Text>
    </View>
  )
}

export default Avatar

const styles = StyleSheet.create({
  circle: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 40,
    marginRight: 20,
    padding: 3,
  },
  circleImage: {
    flex: 1,
    borderRadius: 40,
  },
  circleLine: {
    borderWidth: 1,
    padding: 3,
    borderColor: "#FF941A",
  },
  text: {
    position: "absolute",
    bottom: 32,
    left: 15,
    color: "#fff",
    fontWeight: "bold",
  },
})
