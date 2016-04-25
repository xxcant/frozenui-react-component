import React, { Component } from 'react'

/**
 * [Button]
 * @param  {[String]} children [button text]
 * @param {[String]} className [button styles classname]
 * @param  {[Function]} handler [click button fire callback]
 */

export default class Button extends Component{

	static defaultProps = {
		className: 'ui-btn'
	}
	static propTypes = {
		children: React.PropTypes.string.isRequired
	}

	cbFn = () => {
		if(this.props.handler){
			this.props.handler()
		}else{
			return;
		}
	}

	render(){
		return(
			<button onClick={this.cbFn} {...this.props}>{this.props.children}</button>
		)
	}
}
