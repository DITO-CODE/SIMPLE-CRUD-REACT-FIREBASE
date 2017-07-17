import React from 'react';
import {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getElements} from '../reducers/firebase-reducer';


class ContactList extends Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	/*componentDidMount(){
	  let component = this;
	  component.getElements();
	}*/

	componentWillReceiveProps(nextProps){

		if(nextProps.successElements != null){
			console.log(nextProps.successElements);
		}

	}


	render(){
		return (

			<div>
				<input type="text" onChange={this.updateInputValue.bind(this)} name="nombre" /> 
				<button onClick={() => this.showValue()} >Mostrar</button>
			</div>
			);
	}

	updateInputValue(event){
		this.setState({"nombre":event.target.value});

	}

	showValue(){
		this.props.getElementsAction.getElements(this.state.nombre);
	}

	


}


const mapStateToProps = (state) => {
  return {
  	successElements: state.firebaseReducer.get("successElements")
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  	getElementsAction: bindActionCreators({getElements : getElements}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);