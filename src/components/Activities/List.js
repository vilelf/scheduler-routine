import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  justify-content: center;
`;
  
const ActivityWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2px auto;
`;

const Activity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-right: 2px; 
  width:96px;
  cursor: pointer;
`;


const List = ({ dispatch, list, selected }) => {
  useEffect(() => {
    if (list.length === 0) {
      axios.get('http://127.0.0.1:8000/activities/')
      .then(response => {
        console.log(response.data)
        return response.data
      })
      .then(data => {
        dispatch({
          type: 'POPULATE_ACTIVITY',
          list: data.activities
        })
      })
      .catch(error => {
        console.log(error)
      })
    }
    
  }, [])
  
  const setActivity = (activity) => {
    return {
      type: 'SET_ACTIVITY',
      activity,
    }
  }

  const deleteActivity = (item) => {
    let name = item.name
    console.log(item)
    axios.delete('http://localhost:8000/activity/', {data: {'id': item.id}})
    .then(res => {
      dispatch({
        type: 'DELETE_ACTIVITY',
        name
      })
    })
  }
  return (
    <Wrapper>
      {
        list.map((item, key) => (
          <ActivityWrapper key={item.id}>
            <Activity 
              onClick={() => dispatch(setActivity({id: item.id, name: item.name, color: item.color}))}
              style={{backgroundColor: item.color}}
              selected={selected}
            >
              {item.name} - {item.id}
            </Activity>
            <button
              onClick={() => deleteActivity(item)}
            >x</button>
          </ActivityWrapper>
        ))
      }
    </Wrapper>
  );
}

export default connect(state => ({ list: state.activity.list, selected: state.activity.selected }))(List);