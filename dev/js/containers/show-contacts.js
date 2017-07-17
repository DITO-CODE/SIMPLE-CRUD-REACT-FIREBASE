import React from 'react';
import {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../reducers/firebase-reducer';


class ShowContacts extends Component {

	constructor(props){
		super(props);
		this.state = {};
	}


	componentWillReceiveProps(nextProps){
		if(nextProps.contacto != null){
			console.log(nextProps.contacto);
			this.setState({userSelected : nextProps.contacto})
		}
	}


	render(){
		 if (!this.props.contactos) {
            return (
            	<div>Select a user...
            	</div>
            	);
        }else{
        	
			return (
					<div>
					<ul>
						{this.props.contactos?(
						Object.keys(this.props.contactos).map((key,index)=>{
								return <li key={key} 
									onClick = {()=>this.props.actions.selectUser(this.props.contactos[key])}
								>{this.props.contactos[key].nombre}</li>
							})

						):null}
						</ul>
					+
					</div>
				);
		}

	}

}


function mapStateToProps (state){
	return {
		contactos: state.firebaseReducer.get("successElements"),
		contacto: state.firebaseReducer.get("succesUser")
	};
}

const mapDispatchToProps = (dispatch) => {
  return {
  	actions: bindActionCreators({selectUser}, dispatch)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ShowContacts);