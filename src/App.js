import React from 'react';
import './App.css';
import Title from './components/Title'
import WeekTable from './components/WeekTable'
import Activities from './components/Activities'
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from './store'

const Wrapper = styled.div`
  font-family: 'Balsamiq Sans', cursive;
`;

const SubWrapper = styled.div`
  display: flex;
`;

function App() {
  return (
    <Wrapper>
      <Provider store={store}>
        <Title />
        <SubWrapper>
          <Activities />
          <WeekTable />
        </SubWrapper>
      </Provider>
    </Wrapper>
  );
}

export default App;
