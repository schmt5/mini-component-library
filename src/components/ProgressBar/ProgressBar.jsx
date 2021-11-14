/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--radius": "8px",
    "--padding": "0",
    "--height": "1.2rem",
  },
  medium: {
    "--radius": "8px",
    "--padding": "8px",
    "--height": "2rem",
  }
}






const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--padding);
  `;
  
  const Bar = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: var(--radius);
  `;
  
  const Progress = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  flex: 0 0 ${value}%
  `;



  return (
    <Wrapper style={styles}>
      <Bar>
        <Progress></Progress>
      </Bar>
    </Wrapper>
  );
};



export default ProgressBar;
