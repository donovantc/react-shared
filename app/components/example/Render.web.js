import React, { PureComponent } from 'react'

export default class Render extends PureComponent {
    constructor(){
        super()

        this.state = {
            inputValue: ''
        }
    }

    onChange = (event) => {
        const inputValue = event.target.value
        this.setState(() => ({ inputValue }))
    }

    render(){
        const {inputValue} = this.state
        const {onSubmit, name, error} = this.props

        return (
            <div>
                { name && `Welcome ${name}`}
                What is your name?
                <input onChange={this.onChange} value={inputValue} />
                <button onClick={() => onSubmit(inputValue)}>Submit</button>
                { error }
            </div>
        )
    }
}