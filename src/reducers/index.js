import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses /* name of this property is how you will access the reducer in the app */
});

export default rootReducer;
