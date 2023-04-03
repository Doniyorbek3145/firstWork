const initialState = {
  likeCounter: 0,
  searchValue: '',
  refresh: false,
  urlName: "",
  categoryName: "",
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_LIKE':
      return { ...state, likeCounter: state.likeCounter + 1 };
    case "SET_SEARCH_VALUE":
      return {...state, searchValue: action.payload};
    case "SET_REFRESH_PAGE":
      return{...state, refresh: action.payload};
    case "SET_URL_NAME":
      return {...state, urlName: action.payload};
    case "SET_CATEGORY_NAME":
      return{...state, categoryName: action.payload};
    default:
      return state;
  }
};

export default counterReducer;