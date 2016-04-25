import React from 'react'
import {mount, shallow, render} from 'enzyme'
import ChaiEnzyme from 'chai-enzyme'
import chai, {expect} from 'chai'

chai.use(ChaiEnzyme())

import Button from '../component/Button.jsx'


describe('<Button />', () => {
	it('component has text', () => {
		expect(mount(<Button>Test</Button>)).to.have.text('Test')
	})
})