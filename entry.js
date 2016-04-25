import React from 'react'
import ReactDOM from 'react-dom'

import Button from './component/Button.jsx'

function btnCall(){
	alert('test')
}

ReactDOM.render(
	<Button handler={btnCall} className="ui-btn-s" disabled>普通按钮</Button>,
	document.getElementById('Button')
)