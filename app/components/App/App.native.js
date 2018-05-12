/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import Example from '../Example'
import Example2 from '../Example2'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the React Native App</Text>
        <Example />
        <Example2 />
      </View>
    )
  }
}

export { App }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  }
})
