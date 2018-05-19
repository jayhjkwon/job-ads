import React, { PureComponent } from 'react'
import styled from 'styled-components'

export default class extends PureComponent {
  onMinusClick = e => {
    this.props.onChange(this.props.value >= 1 ? this.props.value - 1 : 0)
  }

  onPlusClick = e => {
    this.props.onChange(this.props.value + 1)
  }
  render() {
    return (
      <StepperContainer>
        <span className="minus" onClick={this.onMinusClick}>
          -
        </span>
        <span className="value">{this.props.value}</span>
        <span className="plus" onClick={this.onPlusClick}>
          +
        </span>
      </StepperContainer>
    )
  }
}

const StepperContainer = styled.div`
  text-align: center;

  .minus,
  .plus,
  .value {
    display: inline-block;
    padding: 0 5px;
    font-size: 2rem;
  }

  .minus,
  .plus {
    cursor: pointer;
  }

  .value {
  }

  .plus {
  }
`
