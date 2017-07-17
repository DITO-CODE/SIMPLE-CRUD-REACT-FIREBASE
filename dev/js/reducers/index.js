import {combineReducers} from 'redux-loop';
import firebaseReducer from './firebase-reducer';


const allReducers = combineReducers({
	firebaseReducer: firebaseReducer
});	

export default allReducers;