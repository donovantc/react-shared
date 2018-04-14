import React from 'react'
import Example from '../Example'

const App = props => {
  return (
    <div>
      <h1 style={styles.title}>This is the React Web App</h1>
      <Example />
    </div>
  )
}

export { App }

const styles = {
  title: {
    textAlign: 'center'
  }
}
