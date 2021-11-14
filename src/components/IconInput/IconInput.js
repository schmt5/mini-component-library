import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...deligated
}) => {
  const styles = SIZES[size];


  return (
    <Wrapper>
      <IconWrapper style={{ '--icon-size': styles.iconSize + 'px', }}>
        <Icon id={icon} size={styles.iconSize} strokeWidth={2} />
      </IconWrapper>
      <TextInput
        {...deligated}
        style={{
          '--widht': width + 'px',
          '--height': styles.height + 'px',
          '--border-thickness': styles.borderThickness + 'px',
          '--font-size': styles.fontSize + 'px',
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--icon-size);
`;

const TextInput = styled.input`
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  height: var(--height);
  width: var(--width);
  padding-left: var(--height);
  font-weight: 700;
  font-size: var(--font-size);
  color: inherit;
  outline-offset: 3px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500}
  }
`;

export default IconInput;
