export const SELECT_MEMBERSHIP = 'SELECT_MEMBERSHIP'
export const SELECT_ADS = 'SELECT_ADS'
export const CHECKOUT = 'CHECKOUT'

export const initialState = {
  membershipName: undefined,
  classicCount: 0,
  standoutCount: 0,
  premiumCount: 0,
  totalPrice: 0
}

export const actionCreators = {
  selectMembership: membershipName => (dispatch, getState) => {
    // if membership name is the same as existing name set it empty
    if (
      membershipName &&
      getState().jobAdsState.membershipName &&
      membershipName.toLowerCase() ===
        getState().jobAdsState.membershipName.toLowerCase()
    ) {
      return dispatch({ type: SELECT_MEMBERSHIP, membershipName: undefined })
    }

    return dispatch({ type: SELECT_MEMBERSHIP, membershipName })
  },

  selectAds: ({ classicCount, standoutCount, premiumCount }) => dispatch => {
    return dispatch({
      type: SELECT_ADS,
      classicCount,
      standoutCount,
      premiumCount
    })
  },

  checkout: () => dispatch => {
    return dispatch({ type: CHECKOUT })
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MEMBERSHIP: {
      return {
        ...state,
        membershipName: action.membershipName
      }
    }

    case SELECT_ADS: {
      return {
        ...state,
        classicCount:
          action.classicCount !== undefined
            ? action.classicCount
            : state.classicCount,
        standoutCount:
          action.standoutCount !== undefined
            ? action.standoutCount
            : state.standoutCount,
        premiumCount:
          action.premiumCount !== undefined
            ? action.premiumCount
            : state.premiumCount
      }
    }

    case CHECKOUT: {
      return {
        ...state,
        totalPrice: getTotalPrice({ ...state })
      }
    }

    default:
      return state
  }
}

export const getTotalPrice = ({
  membershipName,
  classicCount,
  standoutCount,
  premiumCount
}) => {
  const classicPrice = 269.99
  const classicDiscountForUnileverA = 3
  const classicDiscountForUnileverB = 2
  const classicDiscountForFordA = 5
  const classicDiscountForFordB = 4

  const standoutPrice = 322.99
  const standoutDiscountPriceForApple = 299.99
  const standoutDiscountPriceForFord = 309.99

  const premiumPrice = 394.99
  const premiumDiscountPriceForNike = 379.99
  const premiumDiscountPriceForFord = 389.99

  if (!membershipName) {
    return (
      classicCount * classicPrice +
      standoutCount * standoutPrice +
      premiumCount * premiumPrice
    ).toFixed(2)
  }

  if (membershipName === 'unilever') {
    const classicTotal =
      Math.floor(classicCount / classicDiscountForUnileverA) *
        classicDiscountForUnileverB *
        classicPrice +
      (classicCount % classicDiscountForUnileverA) * classicPrice
    const standoutTotal = standoutCount * standoutPrice
    const premiumTotal = premiumCount * premiumPrice
    return (classicTotal + standoutTotal + premiumTotal).toFixed(2)
  }

  if (membershipName === 'apple') {
    return (
      classicCount * classicPrice +
      standoutCount * standoutDiscountPriceForApple +
      premiumCount * premiumPrice
    ).toFixed(2)
  }

  if (membershipName === 'nike') {
    return (
      classicCount * classicPrice +
      standoutCount * standoutPrice +
      premiumCount *
        (premiumCount >= 4 ? premiumDiscountPriceForNike : premiumPrice)
    ).toFixed(2)
  }

  if (membershipName === 'ford') {
    const classicTotal =
      Math.floor(classicCount / classicDiscountForFordA) *
        classicDiscountForFordB *
        classicPrice +
      (classicCount % classicDiscountForFordA) * classicPrice
    const standoutTotal = standoutCount * standoutDiscountPriceForFord
    const premiumTotal =
      premiumCount *
      (premiumCount >= 3 ? premiumDiscountPriceForFord : premiumPrice)
    return (classicTotal + standoutTotal + premiumTotal).toFixed(2)
  }

  return 0
}
