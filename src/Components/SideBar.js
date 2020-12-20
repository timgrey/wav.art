import React, { Component } from 'react'
import Uploader from './Uploader'
import styled from 'styled-components'

const SideNav = styled.div`
  height: 100%;
  position: absolute;
  top: 50%;
  left: 10px;
`

class SideBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projectName: '',
      fileName: ''
    }
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
      <SideNav displaySide={this.props.displaySide}>
        <div className="sideNavContent">
          <div className="sideNavHeader">
            <h1>
              Upload a song:
            </h1>
          </div>
    
          <Uploader />
        </div>
      </SideNav>
    )
  }
}

export default SideBar;
