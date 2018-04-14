import React, { PureComponent } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default class Render extends PureComponent {
  constructor () {
    super()

    this.state = {
      inputValue: ''
    }
  }

  onChange = value => {
    const inputValue = value
    this.setState(() => ({ inputValue }))
  }

  render () {
    const { inputValue } = this.state
    const { onSubmit, name, error } = this.props

    return (
      <View style={styles.page}>
        {name && <Text style={[styles.text, styles.textHighlight]}>{`Welcome ${name}`}</Text>}
        <Text style={styles.text}>What is your name?</Text>
        <TextInput style={styles.input} onChangeText={this.onChange} value={inputValue} />
        <TouchableOpacity style={styles.submitButton} onPress={() => onSubmit(inputValue)}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
        {error && <Text style={[styles.text, styles.error]}>{error}</Text>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    paddingVertical: 5,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textHighlight: {
    fontSize: 20,
    color: '#38c742'
  },
  input: {
    height: 50,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#114183'
  },
  submitButton: {
    height: 50,
    backgroundColor: '#38c742',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: {
    color: '#f92828'
  }
})
