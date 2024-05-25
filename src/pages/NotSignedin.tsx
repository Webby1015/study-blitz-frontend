// Import necessary modules
import React from 'react';
import styled, { keyframes } from 'styled-components';
import DefaultLayout from '../layout/DefaultLayout';
import { Link } from 'react-router-dom';

// Define keyframes
const scanAnimation = keyframes`
  0% { background-position: 0 -100vh; }
  35%, 100% { background-position: 0 100vh; }
`;

// Styled components
const Container = styled.div`
  min-height: 80vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1e3f; /* Dark blue */
  background-image: radial-gradient(#add8e6, #172554),
    url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTNrZTZuZDdvZnN2OG1laXdnZXAxYjA0ZWF3NXNhb2QzbjQyNHE2cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lCkumTggV53xe/giphy.gif');
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Inconsolata', Helvetica, sans-serif;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9); /* Light text color */
  text-shadow: 0 0 1ex rgba(255, 255, 255, 0.8), 0 0 2px rgba(255, 255, 255, 0.8);
  position: relative;
`;

const Noise = styled.div`
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  opacity: 0.02;
`;

const Overlay = styled.div`
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  background-size: auto 4px;
  z-index: 1;

  &::before {
    content: '';
    pointer-events: none;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      0deg,
      transparent 0%,
      rgba(32, 128, 32, 0.2) 2%,
      rgba(32, 128, 32, 0.8) 3%,
      rgba(32, 128, 32, 0.2) 3%,
      transparent 100%
    );
    background-repeat: no-repeat;
    animation: ${scanAnimation} 7.5s linear 0s infinite;
  }
`;

const Terminal = styled.div`
  box-sizing: inherit;
  position: relative;
  padding: 4rem;
  text-transform: uppercase;
`;

const Output = styled.div`
  color: rgba(255, 255, 255, 0.9); /* Light text color */
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.8), 0 0 2px rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
`;

const ErrorCode = styled.span`
  color: white;
`;

const StyledLink = styled(Link)`
  color: #172554;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &::before {
    content: '[';
  }

  &::after {
    content: ']';
  }

  &:hover {
    color: #ffffff; /* White color on hover */
  }
`;

// Component
export const NotSignedin = () => {
  return (
    <DefaultLayout>
      <Container>
        <Noise />
        <Overlay />
        <Terminal>
          <h1>You Are Not Signed In</h1>
          <Output>
            Please go to{' '}
            <StyledLink to="/auth/signin">Sign in</StyledLink>,{' '}
            <StyledLink to="/auth/signup">Sign up</StyledLink> to access the Study Blitz Website.
          </Output>
        </Terminal>
      </Container>
    </DefaultLayout>
  );
};
