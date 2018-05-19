import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionCreators } from '../../store/jobAds'
import styled from 'styled-components'
import StepZilla from 'react-stepzilla'
import Membership from './Membership'
import Ads from './Ads'
import Checkout from './Checkout'

export class Index extends Component {
  render() {
    const steps = [
      { name: 'Membership', component: <Membership {...this.props} /> },
      { name: 'Ads', component: <Ads {...this.props} /> },
      { name: 'Checkout', component: <Checkout {...this.props} /> }
    ]

    return (
      <HomePageContainer>
        <Grid>
          <Row>
            <Col sm={8} smOffset={2}>
              <div className="step-progress">
                <StepZilla
                  steps={steps}
                  startAtStep={0}
                  stepsNavigation={false}
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </HomePageContainer>
    )
  }
}

const HomePageContainer = styled.div`
  padding: 1rem 0 2rem 0;
  height: 100%;
`

export default connect(
  state => state.jobAdsState,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Index)
