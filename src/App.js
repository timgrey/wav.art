import React, { Component } from 'react'
import Canvas from './Components/Canvas'
import CanvasContextProvider from './Contexts/CanvasContext'
import BottomBar from './Components/BottomBar'
import styled from 'styled-components'
import background from './Assets/background.jpeg'

const Content = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    border-color: #252525;
    border-style: solid;
    background-image: url(${background});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
`

class App extends Component {
  render() {
    return (
      <CanvasContextProvider>
        <Content>
          <Canvas />
          <BottomBar />
        </Content>
      </CanvasContextProvider>
    )
  }
}

export default App;