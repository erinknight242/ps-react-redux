import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses, /* name of this property is how you will access the reducer in the app */
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
