import React from 'react'
import { shallow, mount } from 'enzyme'
import Ads from './Ads'

it('should render ads count', () => {
  const props = {
    classicCount: 1,
    standoutCount: 2,
    premiumCount: 3
  }
  const wrapper = mount(<Ads {...props} />)

  expect(wrapper.find('.count.classic .value').text()).toEqual('1')
  expect(wrapper.find('.count.standout .value').text()).toEqual('2')
  expect(wrapper.find('.count.premium .value').text()).toEqual('3')
})

it('selectAds function prop should be called when ads count changed', () => {
  const props = {
    selectAds: jest.fn(),
    classicCount: 1,
    standoutCount: 2,
    premiumCount: 3
  }
  const wrapper = mount(<Ads {...props} />)
  wrapper
    .find('.count.classic div.stepper-classic span.minus')
    .simulate('click')

  expect(props.selectAds.mock.calls.length).toEqual(1)
})
