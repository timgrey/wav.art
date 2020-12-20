import React, { Component } from 'react'

import './App.css'
import Canvas from './Components/Canvas'
import AudioPlayer from './Components/AudioPlayer'
import CanvasContextProvider from './Contexts/CanvasContext'
import SideBar from './Components/SideBar'
import styled from 'styled-components'
import background from './Assets/background.jpeg'

class App extends Component {
  Content = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    border-color: #252525;
    border-style: solid;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${background});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
  `
  render() {
    const Content = this.Content;
    return (
      <CanvasContextProvider>
        <Content>
          <SideBar />
          <Canvas />
          <AudioPlayer />
        </Content>
      </CanvasContextProvider>
    )
  }
}

export default App;