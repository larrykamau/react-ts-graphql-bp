import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  name: string;
  active: boolean;
  status: string;
  time: string;
}

export function ToBeAddedItem({ name, status, active, time }: Props) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Status>{status}</Status>
      <Info>{active}</Info>
      <Days>{time}Days</Days>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  min-height: 2.75rem;
  font-weight: 500;
  color: ${p => p.theme.text};

  &:nth-child(odd) {
    background-color: ${p => p.theme.backgroundVariant};
  }
`;

const Name = styled.div`
  flex: 1;
  padding: 0.625rem 0;
`;
const Status = styled.div`
  flex: 1;
  padding: 0.25rem 0;
`;
const Info = styled.div`
  display: flex;
`;
const Days = styled.div`
  display: flex;
  align-items: center;
  min-width: 6rem;
  .icon {
    margin-right: 0.125rem;
  }
`;
