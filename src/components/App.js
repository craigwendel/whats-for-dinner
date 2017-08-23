import React, { Component } from 'react'
import '../styles/App.css'
import hero from '../images/heroimg.jpeg'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header>
          <div className='hero-text'>
            <h1>You pick your ingredients...</h1>
            {/* <h2>We show you recipes!</h2> */}
          </div>
          <div id='hero' style={{backgroundImage: `url(${hero})`, backgroundSize: 'cover', width: '100%', height: '100vh'}} />
        </header>
      </div>
    )
  }
}

export default App
