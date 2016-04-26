import React, { Component } from 'react'

import DemoButton from './demo_button.jsx'

export default class App extends Component{
	render(){
		return (
			<div className="ui-whitespace">
				<DemoButton></DemoButton>
				{/* other component */}
			</div>
		)
	}
}