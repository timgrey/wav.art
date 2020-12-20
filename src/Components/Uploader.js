import React, { Component } from 'react'
import { withCanvasContext } from '../Contexts/CanvasContext'
import styled from 'styled-components'

const Upload = styled.input`
  & label {
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: black;
    display: inline-block;
  }
`

class Uploader extends Component {
  render() {
    return (
      <form>
        {/* <Upload name="file" onChange={this.props.handleFileUpload} type="file" ref={this.props.uploader} /> */}
        <input name="file" onChange={this.props.handleFileUpload} type="file" ref={this.props.uploader} />
        <label>Choose a file</label>
      </form>
    )
  }
}

export default withCanvasContext(Uploader)
