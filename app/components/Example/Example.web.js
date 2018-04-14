import React, { PureComponent } from 'react'

export default class Render extends PureComponent {
  constructor () {
    super()

    this.state = {
      inputValue: ''
    }
  }

  onChange = event => {
    const inputValue = event.target.value
    this.setState(() => ({ inputValue }))
  }

  render () {
    const { inputValue } = this.state
    const { onSubmit, name, error } = this.props

    return (
      <div style={styles.container}>
        {name && `Welcome ${name}`}
        What is your name?
        <input onChange={this.onChange} value={inputValue} />
        <button onClick={() => onSubmit(inputValue)}>Submit</button>
        {error}
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '20px',
    height: '100px'
  }
}
