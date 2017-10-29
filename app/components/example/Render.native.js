import React, { PureComponent } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

export default class Render extends PureComponent {
    constructor(){
        super()

        this.state = {
            inputValue: ''
        }
    }

    onChange = (value) => {
        const inputValue = value
        this.setState(() => ({ inputValue }))
    }

    render(){
        const {inputValue} = this.state
        const {onSubmit, name, error} = this.props

        console.log("Render", this.props)

        return (
            <View>
                { name && <Text>{`Welcome ${name}`}</Text> }
                <Text>What is your name?</Text>
                <TextInput onChangeText={this.onChange}  value={inputValue} />
                <TouchableOpacity onPress={() => onSubmit(inputValue)}>
                    <Text>Submit</Text>
                </TouchableOpacity>
                { error && <Text>{error}</Text> }
            </View>
        )
    }
}