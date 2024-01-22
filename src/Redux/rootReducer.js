import { combineReducers } from 'redux';
import pageReducer from '../Redux/page/pageReducer';

const rootReducer = combineReducers({
  navigation: pageReducer,
  // Add other reducers if needed
});

export default rootReducer;
