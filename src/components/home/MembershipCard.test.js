import React from 'react'
import { shallow, mount } from 'enzyme'
import MembershipCard from './MembershipCard'

it('Panel should be active if membership name is the same as title', () => {
  const props = {
    selectMembership: jest.fn(),
    title: 'Unilever',
    membershipName: 'unilever'
  }
  const wrapper = mount(<MembershipCard {...props} />)

  expect(wrapper.find('.panel.panel-primary').exists()).toEqual(true)
})

it('selectMembership function prop should be called when panel clicked', () => {
  const props = {
    selectMembership: jest.fn(),
    title: 'Unilever',
    membershipName: 'unilever'
  }
  const wrapper = mount(<MembershipCard {...props} />)
  wrapper.find('.panel').simulate('click')

  expect(props.selectMembership.mock.calls.length).toEqual(1)
})
