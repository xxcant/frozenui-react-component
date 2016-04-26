import React, { Component } from 'react'

import Button from '../components/Button'

export default class App extends Component{
	render(){
		return (
			<div id="wrap" className="wrap">
				<div className="demo-box"><Button>按钮</Button></div>
			</div>
		)
	}
}