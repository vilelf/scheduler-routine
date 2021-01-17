import React from 'react';
import styled from 'styled-components';

import Bloquinho from './Bloquinho';

const Wrapper = styled.div`
  display: flex;
`;


const Row = ({time}) => {
  const listaVazia = ['', '', '', '', '', '', '', ''];
  return (
    <Wrapper
      data-time={time}
    >
      {listaVazia.map((item, key) => (
        <Bloquinho 
          key={key}
          content={key === 0 ? time : item} 
          clickable={key === 0 ? 0 : 1}
        />
      ))}
    </Wrapper>
  )
}

export default Row;