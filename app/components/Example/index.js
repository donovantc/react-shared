import React, { PureComponent } from 'react'
import Example from './Example'

class ExampleComponent extends PureComponent {
  constructor () {
    super()

    this.state = {
      name: null,
      error: null
    }
  }

  onSubmit = name => {
    let stateValue

    if (!name || name.length < 2) {
      stateValue = { name: null, error: 'Name should be at least 2 characters' }
    } else stateValue = { name, error: null }

    this.setState(() => ({ ...stateValue }))
  }

  render () {
    return <Example {...this.props} {...this.state} onSubmit={this.onSubmit} />
  }
}

export default ExampleComponent
