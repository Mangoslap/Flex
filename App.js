import React from 'react';
import { StyleSheet, Text, Image, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

var myImage = require('./assets/pug.jpg');

export default class App extends React.Component {
  doNothing = () => {

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="md-close" size={32} color="#BDBDBD" />
          <Ionicons name="md-cog" size={32} color="#BDBDBD" />
        </View>
        <View style={styles.photoContainer}>
          <Image source={myImage} style={styles.img} />
          <Text style={styles.textStyle}>Marco Rodriguez</Text>
        </View>
        <View style={styles.body}>
          <Button
            icon={
              <Ionicons
                name="md-text"
                size={15}
                color="white"
              />
            }
            onPress= {() => alert('Coming Soon')}
            title="Update Status"
          />
          <Button
            icon={
              <Ionicons
                name="md-person-add"
                size={15}
                color="white"
              />
            }
            onPress= {() => alert('Coming Soon')}
            title="Add Friends"
          />
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
    backgroundColor: "#263238"
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
    justifyContent: 'space-around',
  },
  img: {
    width: 175,
    height: 175,
    borderRadius: 175 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white"
  },
  textStyle: {
    fontSize: 28,
    color: 'white',
  },
  body: {
    flex: 2,
    padding: 20,
    paddingHorizontal: 20,
    justifyContent: "space-around",
  },
  footer: {
    flex: 4,
    justifyContent: "center",
  },
});
