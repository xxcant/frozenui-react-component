import React, { Component } from 'react'

/**
 * [Button]
 * @param  {[String]} children [button text]
 * @param {[String]} className [button styles classname]
 */

export default class Button extends Component{

	static defaultProps = {
		className: 'ui-btn'
	}
	static propTypes = {
		children: React.PropTypes.string.isRequired
	}

	render(){
		return(
			<button {...this.props}>{this.props.children}</button>
		)
	}
}
