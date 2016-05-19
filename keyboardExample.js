import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default class KeyboardExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onKeyboardWillShow() {
    console.log('Keyboard is shown');
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ height: Dimensions.get('window').height, flex: 1 }} onKeyboardWillShow={this.onKeyboardWillShow}>
        <View
        style={styles.container}>
          <Text style={styles.welcome}>
            Keyboard Test
          </Text>
          <TextInput 
            style={styles.input}
            onChangeText={(text) => this.setState({text})} 
            value={this.state.text}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    alignSelf: 'center',
    backgroundColor: 'white',
    color: '#333333',
    height: 50,
    marginBottom: 5,
    textAlign: 'center',
    width: 200,
  },
});
