import React from 'react'
import { shallow, mount } from 'enzyme'
import Stepper, { getNextMinusValue } from './Stepper'

it('should render value', () => {
  const props = {
    value: 1,
    onChange: jest.fn()
  }
  const wrapper = mount(<Stepper {...props} />)
  expect(wrapper.find('.value').text()).toEqual('1')
})

it('onChange function prop should be called when minus button clicked', () => {
  const props = {
    value: 1,
    onChange: jest.fn()
  }
  const wrapper = mount(<Stepper {...props} />)
  wrapper.find('.minus').simulate('click')
  expect(props.onChange.mock.calls.length).toEqual(1)
})

it('onChange function prop should be called when plus button clicked', () => {
  const props = {
    value: 1,
    onChange: jest.fn()
  }
  const wrapper = mount(<Stepper {...props} />)
  wrapper.find('.plus').simulate('click')
  expect(props.onChange.mock.calls.length).toEqual(1)
})

it('getNextMinusValue function should return one minus value', () => {
  const nextValue = getNextMinusValue(1)
  expect(nextValue).toEqual(0)
})

it('getNextMinusValue function should return 0 when current value is 0', () => {
  const nextValue = getNextMinusValue(0)
  expect(nextValue).toEqual(0)
})
