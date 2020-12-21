import React, { Component } from 'react'
import { withCanvasContext } from '../Contexts/CanvasContext'
import styled from 'styled-components'

const UploadLabel = styled.label`
    font-size: 20px;
    color: #000A;
    display: inline-block;
    line-height: 0;
    font-weight: bolder;
    margin-right: 8px;
    transform: translateY(1px);
`

class Uploader extends Component {
  render() {
    return (
  
      <form>
        <UploadLabel>Upload A Song:</UploadLabel>
        <input 
          onChange={this.props.handleFileUpload} 
          type="file" 
          ref={this.props.uploader}
          accept="audio/*"
        />
      </form>
    )
  }
}

export default withCanvasContext(Uploader)
