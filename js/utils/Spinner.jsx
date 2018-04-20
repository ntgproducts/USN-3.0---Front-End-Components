import React from 'react';

// Styled-Components is not compatible with no j/s implementations
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
  animation: ${spin} 2s infinite linear;
  background-image: url(/dist/img/system/brandmark.png);
  background-repeact: no-repeat;
  max-width: 36px;
  margin: 5em auto;
  display: block;

`;

const Spinner = () => <Image src="/dist/img/system/brandmark.png" alt="loading indicator" />;


export default Spinner;
