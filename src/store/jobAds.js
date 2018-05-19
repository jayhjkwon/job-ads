export const SELECT_MEMBERSHIP = 'SELECT_MEMBERSHIP'
export const SELECT_ADS = 'SELECT_ADS'
export const CHECKOUT = 'CHECKOUT'

export const initialState = {
  memberShipName: undefined,
  classicCount: 0,
  standoutCount: 0,
  premiumCount: 0,
  totalPrice: 0
}

export const actionCreators = {
  selectMembership: memberShipName => dispatch => {
    dispatch({ type: SELECT_MEMBERSHIP, memberShipName })
  },

  selectAds: ({ classicCount, standoutCount, premiumCount }) => dispatch => {
    dispatch({ type: SELECT_ADS, classicCount, standoutCount, premiumCount })
  },

  checkout: () => dispatch => {
    dispatch({ type: CHECKOUT })
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MEMBERSHIP: {
      return {
        ...state,
        memberShipName: action.memberShipName
      }
    }

    case SELECT_ADS: {
      return {
        ...state,
        classicCount:
          action.classicCount != undefined
            ? action.classicCount
            : state.classicCount,
        standoutCount:
          action.standoutCount != undefined
            ? action.standoutCount
            : state.standoutCount,
        premiumCount:
          action.premiumCount != undefined
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
  memberShipName,
  classicCount,
  standoutCount,
  premiumCount
}) => {
  const classicPrice = 269.99
  const classicDiscountForUnilever = 3
  const classicDiscountForFord = 5

  const standoutPrice = 322.99
  const standoutDiscountPriceForApple = 299.99
  const standoutDiscountPriceForFord = 309.99

  const premiumPrice = 394.99
  const premiumDiscountPriceForNike = 379.99
  const premiumDiscountPriceForFord = 389.99

  if (!memberShipName) {
    return (
      classicCount * classicPrice +
      standoutCount * standoutPrice +
      premiumCount * premiumPrice
    ).toFixed(2)
  }

  if (memberShipName === 'unilever') {
    const classicTotal =
      (classicCount - Math.floor(classicCount / classicDiscountForUnilever)) *
        classicPrice +
      (classicCount % classicDiscountForUnilever) * classicPrice
    const standoutTotal = standoutCount * standoutPrice
    const premiumTotal = premiumCount * premiumPrice
    return (classicTotal + standoutTotal + premiumTotal).toFixed(2)
  }

  if (memberShipName === 'apple') {
    return (
      classicCount * classicPrice +
      standoutCount * standoutDiscountPriceForApple +
      premiumCount * premiumPrice
    ).toFixed(2)
  }

  if (memberShipName === 'nike') {
    return (
      classicCount * classicPrice +
      standoutCount * standoutPrice +
      premiumCount *
        (premiumCount >= 4 ? premiumDiscountPriceForNike : premiumPrice)
    ).toFixed(2)
  }

  if (memberShipName === 'ford') {
    const classicTotal =
      (classicCount - Math.floor(classicCount / classicDiscountForFord)) *
        classicPrice +
      (classicCount % classicDiscountForFord) * classicPrice
    const standoutTotal = standoutCount * standoutDiscountPriceForFord
    const premiumTotal =
      premiumCount *
      (premiumCount >= 3 ? premiumDiscountPriceForFord : premiumPrice)
    return (classicTotal + standoutTotal + premiumTotal).toFixed(2)
  }

  return 0
}
