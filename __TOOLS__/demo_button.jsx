import React, { Component } from 'react'

import Button from '../components/Button'
import ButtonProgress from '../components/Button/Button-progress.jsx'

export default class DemoButton extends Component{
	render(){
		return (
			<ul id="button">
				<li className="demo-box">
					<span className="tips">普通小按钮</span>
					<div className="component">
						<Button className="ui-btn-s">确定</Button>
						<Button className="ui-btn-s active">确定</Button>
						<Button className="ui-btn-s disabled">确定</Button>
						<Button className="ui-btn-s" disabled>确定</Button>
					</div>
				</li>
				<li className="demo-box">
					<span className="tips">普通按钮</span>
					<div className="component">
						<Button className="ui-btn">确定</Button>
						<Button className="ui-btn active">确定</Button>
						<Button className="ui-btn" disabled>确定</Button>
					</div>
				</li>
				<li className="demo-box">
					<span className="tips">大按钮</span>
					<div className="component">
						<Button className="ui-btn-lg">确定</Button>
						<Button className="ui-btn-lg" disabled>确定</Button>
						<Button className="ui-btn-lg ui-btn-danger">确定</Button>
						<Button className="ui-btn-lg ui-btn-primary">确定</Button>
					</div>
				</li>
				<li className="demo-box">
					<span className="tips">带进度条按钮 > 单独引用`Button-progress.jsx`</span>
					<div className="component">
						<ButtonProgress className="ui-btn ui-btn-progress">
							<span>50%</span>
        					<span className="ui-btn-inner" style={{width: '50%'}}><span>50%</span></span>
						</ButtonProgress>
					</div>
				</li>
				<li className="demo-box">
					<span className="tips">颜色按钮</span>
					<div className="component">
						<Button className="ui-btn ui-btn-danger">确定</Button>
						<Button className="ui-btn ui-btn-primary">确定</Button>
						<Button className="ui-btn ui-btn-danger active">确定</Button>
						<Button className="ui-btn ui-btn-primary active">确定</Button>
						
					</div>
				</li>

			</ul>
		)
	}
}