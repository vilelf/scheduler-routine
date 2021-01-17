import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { GithubPicker } from 'react-color';
import axios from 'axios';

const Wrapper = styled.div`
  display: grid;
  margin: auto;
`;

const CustomInput = styled.input`
  width: 200px;
  margin: 20px auto;
`;

const CustomButton = styled.button`
  width: 200px;
  margin: 20px auto;
`;

const ActivityForm = ({ dispatch }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#fff');

  const saveActivity = (name) => {
    setName('');
    axios.post(
      'http://localhost:8000/activity/',
      {
        'name': name,
        'color': color
      }
    ).then(
      res => {
      console.log(res);
      dispatch({
        type: 'SAVE_ACTIVITY',
        name,
        color
      })
    })
  }

  return (
    <Wrapper>
      <CustomInput
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <GithubPicker
        color={color}
        triangle="hide"
        className="github-picker"
        onChangeComplete={(colorSelected, event) => setColor(colorSelected.hex)}
      />
      <CustomButton
        className="add-button"
        onClick={() => saveActivity(name)}
      >
        +
      </CustomButton>
    </Wrapper>
  );
}

export default connect()(ActivityForm);