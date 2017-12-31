import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View, } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style = {{flex:1}}>
        <View style = {styles.container}>
          <View style = {styles.header}>
            <Text style = {{fontSize: 50, color: '#054677'}}>
              NORF NORF
            </Text>
            <Text> We dont even know how to make an app but we can try </Text>
          </View>
          <Image style = {styles.image}
          source={{uri: 'http://schoolassets.s3.amazonaws.com/logos/21551/21551.png'}} />

        </View>
      </ScrollView>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  header : {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor : "whitesmoke",
    borderWidth: 10,
    borderColor: '#AFC6E8',
    borderRadius: 20,
    padding: 5,
    marginTop: 20,
  },

  image: {
    width: 150,
    height: 150,
  },
});
