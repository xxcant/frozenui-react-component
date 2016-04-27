import React from 'react'
import {mount, shallow, render} from 'enzyme'
import ChaiEnzyme from 'chai-enzyme'
import chai, {expect} from 'chai'

chai.use(ChaiEnzyme())

import Button, { ButtonProgress } from '../components/Button'


describe('<Button />', () => {
	it('component default state', () => {
		let wrapper = mount(<Button>Test</Button>)
		expect(wrapper).to.have.text('Test')
		expect(wrapper).to.have.className('ui-btn')
		expect(wrapper).to.not.be.disabled()
	})
})
describe('<Button className="ui-btn-danger" />', () => {
	it('component has className', () => {
		let wrapper = render(<Button className="ui-btn-danger">Test</Button>)
		expect(wrapper).to.have.text('Test')
		expect(wrapper).to.not.have.className('ui-btn')
		expect(wrapper).to.have.className('ui-btn-danger')
		expect(wrapper).to.not.be.disabled()
	})
})
describe('<Button disabled />', () => {
	it('component has disabled', () => {
		let wrapper = shallow(<Button disabled>Test</Button>)
		expect(wrapper).to.have.text('Test')
		expect(wrapper).to.have.className('ui-btn')
		expect(wrapper).to.be.disabled()
	})
})

describe('<ButtonProgress />', () => {
	let wrapper = mount(<ButtonProgress><span id="testid"></span></ButtonProgress>)
	it('component has html children', () => {
		expect(wrapper.find('#testid')).to.have.html(`<span id="testid"></span>`)
	})
})

