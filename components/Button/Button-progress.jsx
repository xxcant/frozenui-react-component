import React, { Component, PropTypes } from 'react'

/**
 * [Button]
 * @param  {[Node]} children [children elem node & isRequired]
 * @param {[String]} className [button styles classname]
 */

export default class ButtonProgress extends Component{

	static defaultProps = {
		className: 'ui-btn ui-btn-progress'
	}
	static propTypes = {
		children: PropTypes.node.isRequired
	}

	render(){
		return(
			<button {...this.props}>{this.props.children}</button>
		)
	}
}
