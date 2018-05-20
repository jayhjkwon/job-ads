import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import {
  actionCreators,
  reducer,
  initialState,
  SELECT_MEMBERSHIP,
  SELECT_ADS,
  CHECKOUT
} from './jobAds'

describe('actionCreators', () => {
  const mockedDispatch = payload => payload

  it('should have the properties', () => {
    expect(actionCreators).toHaveProperty('selectMembership')
    expect(actionCreators).toHaveProperty('selectAds')
    expect(actionCreators).toHaveProperty('checkout')
  })

  it('selectMembership action creator should create SELECT_MEMBERSHIP action type', async () => {
    const action = await actionCreators.selectMembership()(mockedDispatch)
    expect(action.type).toEqual(SELECT_MEMBERSHIP)
  })

  it('user should be able to unselect membership', async () => {
    const getState = () => ({
      jobAdsState: { membershipName: 'apple' }
    })
    const action = await actionCreators.selectMembership('apple')(
      mockedDispatch,
      getState
    )
    expect(action.type).toEqual(SELECT_MEMBERSHIP)
    expect(action.membershipName).toEqual(undefined)
  })

  it('selectAds action creator should create SELECT_ADS action type', async () => {
    const action = await actionCreators.selectAds({})(mockedDispatch)
    expect(action.type).toEqual(SELECT_ADS)
  })

  it('checkout action creator should create CHECKOUT action type', async () => {
    const action = await actionCreators.checkout()(mockedDispatch)
    expect(action.type).toEqual(CHECKOUT)
  })
})

describe('reducer', () => {
  it('should return initial state', () => {
    const state = reducer(undefined, {})
    expect(state).toEqual({
      membershipName: undefined,
      classicCount: 0,
      standoutCount: 0,
      premiumCount: 0,
      totalPrice: 0
    })
  })

  it('should handle SELECT_MEMBERSHIP action type', () => {
    const state = reducer(undefined, {
      type: SELECT_MEMBERSHIP,
      membershipName: 'nike'
    })
    expect(state.membershipName).toEqual('nike')
  })

  it('SELECT_ADS action type should return classic count', () => {
    const state = reducer(undefined, {
      type: SELECT_ADS,
      classicCount: 1
    })
    expect(state.classicCount).toEqual(1)
  })

  it('SELECT_ADS action type should return standout count', () => {
    const state = reducer(undefined, {
      type: SELECT_ADS,
      standoutCount: 2
    })
    expect(state.standoutCount).toEqual(2)
  })

  it('SELECT_ADS action type should return premium count', () => {
    const state = reducer(undefined, {
      type: SELECT_ADS,
      premiumCount: 3
    })
    expect(state.premiumCount).toEqual(3)
  })

  it('CHECKOUT action type should return total price when membership is default', () => {
    const state = reducer(
      {
        membershipName: undefined,
        classicCount: 1,
        standoutCount: 2,
        premiumCount: 3
      },
      {
        type: CHECKOUT
      }
    )
    expect(state.totalPrice).toEqual('2100.94')
  })

  it('CHECKOUT action type should return total price when membership is Unilever', () => {
    const state = reducer(
      {
        membershipName: 'unilever',
        classicCount: 3,
        standoutCount: 0,
        premiumCount: 0
      },
      {
        type: CHECKOUT
      }
    )
    expect(state.totalPrice).toEqual('539.98')
  })

  it('CHECKOUT action type should return total price when membership is Unilever', () => {
    const state = reducer(
      {
        membershipName: 'unilever',
        classicCount: 3,
        standoutCount: 0,
        premiumCount: 1
      },
      {
        type: CHECKOUT
      }
    )
    expect(state.totalPrice).toEqual('934.97')
  })

  it('CHECKOUT action type should return total price when membership is Unilever', () => {
    const state = reducer(
      {
        membershipName: 'unilever',
        classicCount: 7,
        standoutCount: 0,
        premiumCount: 1
      },
      {
        type: CHECKOUT
      }
    )
    expect(state.totalPrice).toEqual('1744.94')
  })

  it('CHECKOUT action type should return total price when membership is Unilever', () => {
    const state = reducer(
      {
        membershipName: 'unilever',
        classicCount: 9,
        standoutCount: 0,
        premiumCount: 0
      },
      {
        type: CHECKOUT
      }
    )
    expect(state.totalPrice).toEqual('1619.94')
  })

  it('CHECKOUT action type should return total price when membership is Apple', () => {
    const state = reducer(
      {
        membershipName: 'apple',
        classicCount: 1,
        standoutCount: 0,
        premiumCount: 0
      },
      {
        type: CHECKOUT
      }
    )
    expect(state.totalPrice).toEqual('269.99')
  })

  it('CHECKOUT action type should return total price when membership is Apple', () => {
    const state = reducer(
      {
        membershipName: 'apple',
        classicCount: 0,
        standoutCount: 1,
        premiumCount: 0
      },
      {
        type: CHECKOUT
      }
    )
    expect(state.totalPrice).toEqual('299.99')
  })

  it('CHECKOUT action type should return total price when membership is Apple', () => {
    const state = reducer(
      {
        membershipName: 'apple',
        classicCount: 0,
        standoutCount: 2,
        premiumCount: 0
      },
      {
        type: CHECKOUT
      }
    )
    expect(state.totalPrice).toEqual('599.98')
  })

  it('CHECKOUT action type should return total price when membership is Nike', () => {
    const state = reducer(
      {
        membershipName: 'nike',
        classicCount: 0,
        standoutCount: 0,
        premiumCount: 4
      },
      {
        type: CHECKOUT
      }
    )
    expect(state.totalPrice).toEqual('1519.96')
  })

  it('CHECKOUT action type should return total price when membership is Nike', () => {
    const state = reducer(
      {
        membershipName: 'nike',
        classicCount: 0,
        standoutCount: 0,
        premiumCount: 3
      },
      {
        type: CHECKOUT
      }
    )
    expect(state.totalPrice).toEqual('1184.97')
  })

  it('CHECKOUT action type should return total price when membership is Ford', () => {
    const state = reducer(
      {
        membershipName: 'ford',
        classicCount: 5,
        standoutCount: 0,
        premiumCount: 0
      },
      {
        type: CHECKOUT
      }
    )
    expect(state.totalPrice).toEqual('1079.96')
  })

  it('CHECKOUT action type should return total price when membership is Ford', () => {
    const state = reducer(
      {
        membershipName: 'ford',
        classicCount: 5,
        standoutCount: 1,
        premiumCount: 0
      },
      {
        type: CHECKOUT
      }
    )
    expect(state.totalPrice).toEqual('1389.95')
  })

  it('CHECKOUT action type should return total price when membership is Ford', () => {
    const state = reducer(
      {
        membershipName: 'ford',
        classicCount: 5,
        standoutCount: 1,
        premiumCount: 1
      },
      {
        type: CHECKOUT
      }
    )
    expect(state.totalPrice).toEqual('1784.94')
  })

  it('CHECKOUT action type should return total price when membership is Ford', () => {
    const state = reducer(
      {
        membershipName: 'ford',
        classicCount: 5,
        standoutCount: 1,
        premiumCount: 3
      },
      {
        type: CHECKOUT
      }
    )
    expect(state.totalPrice).toEqual('2559.92')
  })

  it('CHECKOUT action type should return total price when membership is Ford', () => {
    const state = reducer(
      {
        membershipName: 'ford',
        classicCount: 5,
        standoutCount: 1,
        premiumCount: 2
      },
      {
        type: CHECKOUT
      }
    )
    expect(state.totalPrice).toEqual('2179.93')
  })
})
