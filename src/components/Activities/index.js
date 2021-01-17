import React from 'react';
import ActivityForm from './ActivityForm';
import List from './List'
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
`;


const Activities = () => {
  return (
    <Wrapper>
      <ActivityForm />
      <List />
    </Wrapper>
  );
}

export default Activities;