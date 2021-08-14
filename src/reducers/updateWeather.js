
const initialState = {
  data: []
}

const updateWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        data: action.payload
      }
    default: return state
  }
}

export default updateWeatherReducer;

