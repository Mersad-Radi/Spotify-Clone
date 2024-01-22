const initialState = {
  currentIndex: 0,
  // Add other necessary properties based on your application requirements
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GO_TO_NEXT':
      return { ...state, currentIndex: state.currentIndex + 1 };
    case 'GO_TO_PREVIOUS':
      return { ...state, currentIndex: state.currentIndex - 1 };
    default:
      return state;
  }
};

export default pageReducer;

  