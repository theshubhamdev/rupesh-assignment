import {FlatList, ScrollView, StyleSheet, Text, View} from "react-native"
import React from "react"
import Avatar from "../Components/Avatar"
import Chip from "../Components/Chip"
import DishCard from "../Components/DishCard"

const popularDishData = [
    {
      line: true,
    },
    {
      line: false,
    },
    {
      line: true,
    },
    {
      line: true,
    },
    {
      line: false,
    },
]
  
const storiesData = [
    {
        text: "Indian",
        selected: true,
    },
    {
        text: "Italian",
        selected: false,
    },
    {
        text: "Chinese",
        selected: false,
    },
    {
        text: "Russian",
        selected: false,
    },
    {
        text: "Japanese",
        selected: false,
    },
    {
        text: "Mexican",
        selected: false,
    },
]
const Home = () => {

  return (
    <ScrollView>
      <FlatList
        data={storiesData}
        renderItem={({item}) => <Chip selected={item.selected} text={item.text}/>}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding: 10}}
      />
      <Text style={[styles.title, {paddingTop: 20, paddingLeft: 20}]}>
        Popular Dishes
      </Text>
      <FlatList
        data={popularDishData}
        renderItem={({item}) => <Avatar line={item.line} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding: 10}}
      />
      <Text style={[styles.title, {paddingTop: 20, paddingLeft: 20}]}>
        Recommended
      </Text>

      <FlatList
        data={[0, 0, 0, 0, 0, 0]}
        renderItem={({item}) => <DishCard />}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    paddingBottom: 20,
  },
})
