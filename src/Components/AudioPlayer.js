import React from 'react';
import { withCanvasContext } from '../Contexts/CanvasContext';

function AudioPlayer({audioPlayer, src}) {
  return (
    <div>
      <audio ref={audioPlayer} controls src={src} async></audio>
    </div>
  )
}

export default withCanvasContext(AudioPlayer)
