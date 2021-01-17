import React from 'react';
import styled from 'styled-components';

import Row from './Row';
import Bloquinho from './Bloquinho';
import {DAYSOFWEEK, TIMES} from 'utils/consts'
import { connect } from 'react-redux';

const Wrapper = styled.div`
  flex: 4;
  margin: auto 50px;
`;
const HeaderRow = styled.div` 
  display: flex;
`;
const SelectedWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Activity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 2px; 
  width:96px;
  cursor: pointer;
`;


const WeekTable = ({selected}) => {
  return (
    <Wrapper>
      <SelectedWrapper>
        Selected: 
        <Activity style={{backgroundColor: selected.color}}>{selected.name}</Activity>
      </SelectedWrapper>
      <HeaderRow>
        {DAYSOFWEEK.map((item, key) => <Bloquinho key={key} content={item} clickable={0}></Bloquinho>)}
      </HeaderRow>
      {TIMES.map((item, key) => <Row key={item} time={item}/>)}
    </Wrapper>
  )
}

export default connect(state => ({selected: state.activity.selected}))(WeekTable);
