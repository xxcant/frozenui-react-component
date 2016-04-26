# react component

## component styles use [frozenui](http://frozenui.github.io/)

## development

### get started

```bash
$ git clone https://github.com/studzw/frozenui-react-component.git
$ npm install
$ npm start
```
### create new component

* create new component in `/components/`
* you also create new file is named `demo_[name]` in `__TOOLS__` and edit `__TOOLS__/demo_app.jsx` when developing
		
		// e.g demo_button.jsx
		export default class DemoButton extends Component{
			render(){
				return (
					<ul id="button">
						<li className="demo-box">
							<span className="tips">普通小按钮</span>
							<div className="component">
								{/* component */}
							</div>
						</li>
					</ul>
				)
			}
		}
		// e.g demo_app.jsx
		import DemoButton from './demo_button.jsx'
		export default class App extends Component{
			render(){
				return (
					<div className="ui-whitespace">
						<DemoButton></DemoButton>
						{/* other component group */}
					</div>
				)
			}
		}

* open `http://localhost:3000` the browser

## test

### utils
* [mocha](http://mochajs.org/)
* [enzyme](https://github.com/airbnb/enzyme)
* [chai-enzyme](https://github.com/producthunt/chai-enzyme)
* [chai](http://chaijs.com/)
* [sinon](https://github.com/sinonjs/sinon)

### create new test script
1. create new test script in `__TEST__`
2. this script file name like `[name].test.js`

### test your component
```bash
$ npm i mocha -g
// test all component
$ npm test
// test single component
$ t=[name] npm test
```
> you can also use mocha command 
> e.g `mocha --compilers Button.test.js:babel-core/register`


