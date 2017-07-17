import React from 'react';
import UserList from '../containers/list-contacts';
import ShowContacts from '../containers/show-contacts';
require('../../scss/style.scss');


const App = () => (
	<div>
		<h2>Contact List:</h2>
		<UserList />
		<hr/>
		<ShowContacts />
	</div>
);


export default App;