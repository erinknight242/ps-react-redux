import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses, /* name of this property is how you will access the reducer in the app */
  authors
});

export default rootReducer;
