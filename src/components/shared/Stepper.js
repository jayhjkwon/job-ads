import React from 'react'
import styled from 'styled-components'

export default props => {
  const onMinusClick = e => {
    props.onChange(getNextMinusValue(props.value))
  }

  const onPlusClick = e => {
    props.onChange(props.value + 1)
  }
  
  return (
    <StepperContainer className={props.className}>
      <span className="minus" onClick={onMinusClick}>
        -
      </span>
      <span className="value">{props.value}</span>
      <span className="plus" onClick={onPlusClick}>
        +
      </span>
    </StepperContainer>
  )
}

export function getNextMinusValue(currentValue) {
  return currentValue >= 1 ? currentValue - 1 : 0
}

const StepperContainer = styled.div`
  text-align: center;

  .minus,
  .plus,
  .value {
    display: inline-block;
    padding: 0 5px;
    font-size: 2rem;
    user-select: none;
  }

  .minus,
  .plus {
    cursor: pointer;
  }
`
