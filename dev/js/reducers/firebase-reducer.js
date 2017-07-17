import * as Immutable from 'immutable';
import { loop, Effects } from 'redux-loop';
import { createReducer } from 'redux-act';
import { createAction } from 'redux-act';
import  todoAPI  from '../apis/api-firebase';


export const getElements = createAction("get Elements");
export const successElements = createAction("Sucess Elements");
export const selectUser = createAction("selectUser");
export const succesUser = createAction("succesUser");


const INITIAL =Immutable.fromJS({
	adding:false,
	added:false,
	points:{}
});

const ACTIONS = {

	[getElements]: (data,payload)=>{
		return loop(
			data,
			Effects.promise(todoAPI.getElements,payload)
			)
	},
	[successElements]: (data,payload) =>{
		return data
				.set("successElements",payload)
	},
	[selectUser]:(data,payload)=>{
		return loop(
			data,
			Effects.promise(todoAPI.selectUser,payload)
			)
	},
	[succesUser]: (data,payload)=>{
		return data.set("succesUser",payload)
	}
}

const REDUCER = createReducer(ACTIONS, INITIAL);

export default REDUCER;
