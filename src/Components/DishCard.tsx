import {Image, StyleSheet, Text, View} from "react-native"
import React from "react"
import {MaterialCommunityIcons} from "@expo/vector-icons"

const DishCard = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 20,
      }}
    >
      {/* First Part  */}
      <View style={{flex: 1}}>
        {/* First Children */}
        <View style={{flexDirection: "row"}}>
          <Text style={[styles.text, {fontSize: 14, paddingRight: 10}]}>
            Masala Muglai
          </Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>4.2☆</Text>
          </View>
        </View>

        {/* Second Children */}
        <View style={{flexDirection: "row", paddingVertical: 10}}>
          <View style={{alignItems: "center", marginRight: 10}}>
            <MaterialCommunityIcons name="fridge" size={20} color="black" />
            <Text style={[styles.text, {fontSize: 7, fontWeight: "500"}]}>
              Refirgerator
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              paddingRight: 20,
              borderRightWidth: StyleSheet.hairlineWidth,
            }}
          >
            <MaterialCommunityIcons name="fridge" size={20} color="black" />
            <Text style={[styles.text, {fontSize: 7, fontWeight: "500"}]}>
              Refirgerator
            </Text>
          </View>

          <View style={{paddingLeft: 20}}>
            <Text style={styles.text}>Ingredients</Text>
            <Text style={[styles.text, styles.textOrange]}>View list ></Text>
          </View>
        </View>

        <Text
          style={[styles.text, {paddingTop: 10, fontSize: 9, color: "#707070"}]}
        >
          Chicken fried in deep tomato sauce with delicious spices
        </Text>
      </View>

      {/* Second Part */}
      <View style={{alignItems: "flex-end", flex: 1}}>
        <Image
          source={{uri: "https://picsum.photos/200"}}
          style={styles.image}
        />
        <View style={styles.root}>
          <Text style={styles.textOrange}>Add</Text>
        </View>
      </View>
    </View>
  )
}

export default DishCard

const styles = StyleSheet.create({
  ratingContainer: {
    backgroundColor: "#51C452",
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  ratingText: {
    color: "#fff",
    fontSize: 10,
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 5,
  },
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    position: "absolute",
    bottom: 10,
    left: 92,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    borderColor: "#FF941A",
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
  },
  viewOrange: {
    backgroundColor: "#FFF9F2",
  },
  textOrange: {
    color: "#FF941A",
  },
})
