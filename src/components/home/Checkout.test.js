import React from 'react'
import { shallow, mount } from 'enzyme'
import Checkout from './Checkout'

it('should render membership name', () => {
  const props = {
    membershipName: 'unilever',
    checkout: jest.fn()
  }
  const wrapper = mount(<Checkout {...props} />)

  expect(wrapper.find('.membership-name').text()).toEqual('unilever')
})

it('checkout function prop should be called when component mounted', () => {
  const props = {
    membershipName: 'unilever',
    checkout: jest.fn()
  }
  const wrapper = mount(<Checkout {...props} />)
  expect(props.checkout.mock.calls.length).toEqual(1)
})

it('should render classic ads count', () => {
  const props = {
    membershipName: 'unilever',
    checkout: jest.fn(),
    classicCount: 5
  }
  const wrapper = mount(<Checkout {...props} />)

  expect(wrapper.find('.count.classic').text()).toEqual('5')
})

it('should render standout ads count', () => {
  const props = {
    membershipName: 'unilever',
    checkout: jest.fn(),
    standoutCount: 3
  }
  const wrapper = mount(<Checkout {...props} />)

  expect(wrapper.find('.count.standout').text()).toEqual('3')
})

it('should render premium ads count', () => {
  const props = {
    membershipName: 'unilever',
    checkout: jest.fn(),
    premiumCount: 4
  }
  const wrapper = mount(<Checkout {...props} />)

  expect(wrapper.find('.count.premium').text()).toEqual('4')
})

it('should render total price', () => {
  const props = {
    membershipName: 'unilever',
    checkout: jest.fn(),
    totalPrice: 40000.99
  }
  const wrapper = mount(<Checkout {...props} />)

  expect(wrapper.find('.count.total-price').text()).toEqual('$40,000.99')
})
