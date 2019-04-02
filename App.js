import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

var myImage = require('./assets/pug.jpg');

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="md-close" size={32} color="white" />
          <Ionicons name="md-settings" size={32} color="white" />
        </View>
        <View style={styles.photoContainer}>
          <Image source={myImage} style={styles.img} />
          <Text style={styles.textStyle}>Marco Rodriguez</Text>
        </View>
        <View style={styles.body}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Coming Soon')}
          >
            <Text>
              <Ionicons
                name="md-text"
                size={20}
                color="white"
              />
            </Text>
            <Text style={styles.buttonText}>
              Update Status </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Coming Soon')}
          >
            <Text>
              <Ionicons
                name="md-person-add"
                size={20}
                color="white"
              />
            </Text>
            <Text style={styles.buttonText}>
              Add Friends </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#1B1E27"
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  photoContainer: {
    flex: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    justifyContent: 'space-around',
  },
  img: {
    width: 160,
    height: 160,
    borderRadius: 160 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white"
  },
  textStyle: {
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
    color: 'white',
  },
  body: {
    flex: 2,
    padding: 20,
    paddingHorizontal: 20,
    justifyContent: "space-around",
  },
  button: {
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: '#494C55',
    padding: 12,
    flexDirection: "row",
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Helvetica-Bold',
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  footer: {
    flex: 4,
    justifyContent: "center",
  },
});
