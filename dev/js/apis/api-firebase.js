import * as firebase from 'firebase';
import {successElements,succesUser} from '../reducers/firebase-reducer';

export default  {

	getElements(correo){
		return new Promise((resolve,reject)=>{

			let email = correo.replace("@","_").replace(".","_");
			let database = firebase.database();
			let  ref = database.ref('contacts/'+email);
			//console.log("valor mail " + element);

			ref.once("value",function(contactos){
				resolve(contactos.val());
			});
		}).then(successElements);

	},
	selectUser(user){
		return new Promise((resolve,reject) => {
			resolve(user);
		}).then(succesUser);
	}

}
