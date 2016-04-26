import React from 'react'
import ReactDOM from 'react-dom'

import Button from './component/Button'

function btnCall(){
	alert('test')
}


ReactDOM.render(
	<Button className="ui-btn-s" onClick={btnCall}>普通按钮</Button>,
	document.getElementById('Button')
)