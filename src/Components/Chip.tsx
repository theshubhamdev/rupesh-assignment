import {StyleSheet, Text, View} from "react-native"
import React from "react"

const Chip = ({text, selected}) => {
  return (
    <View style={[styles.root, selected && styles.viewOrange]}>
      <Text style={[styles.text, selected && styles.textOrange]}>
        {text || "Indian"}
      </Text>
    </View>
  )
}

export default Chip

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 25,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
  },
  viewOrange: {
    backgroundColor: "#FFF9F2",
    borderColor: "#FF941A",
  },
  textOrange: {
    color: "#FF941A",
  },
})
