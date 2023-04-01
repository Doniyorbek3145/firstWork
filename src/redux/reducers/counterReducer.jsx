const initialState = {
    likeCounter: 0
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_LIKE':
        return { ...state, likeCounter: state.likeCounter + 1 };
      default:
        return state;
    }
  };
  
  export default counterReducer;