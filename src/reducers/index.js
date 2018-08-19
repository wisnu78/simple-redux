import { combineReducers } from 'redux';
import BookReducer from './reducer_book';
import Test from './test';

const rootReducer = combineReducers({
  books:BookReducer,
  tests:Test
});

export default rootReducer;
