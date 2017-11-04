import React, { PureComponent } from 'react'
import Render from './Render'

export default class Example extends PureComponent{
    constructor() {
        super()

        this.state = {
            name: null,
            error: null,
        }
    }

    onSubmit = (name) => {
        let stateValue

        if (!name || name.length < 2)
            stateValue = { name: null, error: 'Name should be at least 2 characters'}
        else
            stateValue = { name, error: null }

        this.setState(() => ({ ...stateValue }))
    }

    render(){
        return (
            <Render
                {...this.props}
                {...this.state}
                onSubmit={this.onSubmit}
            />
        )
    }
}