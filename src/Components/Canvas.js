import React from 'react';
import { withCanvasContext } from '../Contexts/CanvasContext';
import styled from 'styled-components';

const CanvasElement = styled.canvas`
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -53%);
  background: rgba(0, 0, 0, .5);
`

function Canvas({ canvas, ...props }) {
  return (
    <CanvasElement ref={canvas} />
  )
}

export default withCanvasContext(Canvas);
