import React, {useState} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  display: flex;
  height: 40px;
  background-color: #eee;
  margin:2px;
  width:100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Bloquinho = ({ content, clickable, selected }) => {
  const [color, setColor] = useState('');
  const [fill, setFill] = useState('');

  const changeBlock = (e) => {
    const is_clickable = parseInt(e.target.attributes['data-clickable'].value);
    if (is_clickable) {
      setColor(selected.color)
      setFill(selected.name)
    } else {
      console.log(clickable)
      console.log(selected)
    }
  }

  return (
    <Wrapper
      onClick={(e) => changeBlock(e)}
      style={{backgroundColor: color}}
      data-clickable={ clickable !== undefined ? clickable : 1}
    >
      {content}
      {fill}
    </Wrapper>
  )
}

export default connect(state => ({ selected: state.activity.selected }))(Bloquinho);