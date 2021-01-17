const INITIAL_STATE = {
  selected: {},
  list: [],
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'POPULATE_ACTIVITY':
      return { ...state, list: action.list}
    case 'SAVE_ACTIVITY':
      return { ...state, list: [...state.list, {name: action.name, color: action.color}] }
    case 'SET_ACTIVITY':
      return { ...state, selected: action.activity}
    case 'DELETE_ACTIVITY':
      return { 
        ...state, 
        list: state.list.filter((item) => item.name !== action.name)
      }
    default:
      return state
  }
}