import React from 'react';
import styled from 'styled-components/macro';
import { Logos } from './Logos';
import { Title } from 'app/containers/HomePage/components/Title';
import { Lead } from 'app/containers/HomePage/components/Lead';

export function Masthead() {
  return (
    <Wrapper>
      <Logos />
      <Title>Kiu Alcohol Delivery Service</Title>
      <Lead>Now you can easily Order at the comfort of your couch.</Lead>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;
