const strategy = (state, action) => {
    const populateActivity = () => {
      return { ...state, list: action.list}
    }
    
    const saveActivity = () => {
      return { ...state, list: [...state.list, {name: action.name, color: action.color}] }
    }
    
    const setActivity = () => {
      return { ...state, selected: action.activity}
    }
    
    const deleteActivity = () => {
      return { 
        ...state, 
        list: state.list.filter((item) => {
          return item.name !== action.name
        })
      }
    }
  
    const actionTypes = {
      'POPULATE_ACTIVITY': populateActivity,
      'SAVE_ACTIVITY': saveActivity,
      'SET_ACTIVITY': setActivity,
      'DELETE_ACTIVITY': deleteActivity
    }  
  
    return actionTypes[action.type]
  }