import React from 'react';
import { withCanvasContext } from '../Contexts/CanvasContext';
import styled from 'styled-components';

const Audio = styled.audio`
  :focus {
    outline:none;
  } 
`

function AudioPlayer({audioPlayer, src}) {
  return (
    <Audio ref={audioPlayer} controls src={src} autoPlay />
  )
}

export default withCanvasContext(AudioPlayer)
