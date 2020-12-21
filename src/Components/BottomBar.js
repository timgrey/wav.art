import React, { Component } from 'react'
import Uploader from './Uploader'
import styled from 'styled-components'
import AudioPlayer from './AudioPlayer'

const BottomBarWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 450px);
  background: whitesmoke;
  width: 1024px;
  height: 50px;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 40px;
`

class BottomBar extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <BottomBarWrapper>
        <Uploader />
        <AudioPlayer />
      </BottomBarWrapper>
    )
  }
}

export default BottomBar;
