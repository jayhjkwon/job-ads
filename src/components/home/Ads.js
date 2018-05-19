import React from 'react'
import { Panel, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import styled from 'styled-components'
import PageSubTitle from '../shared/styled/PageSubTitle'
import Stepper from '../shared/Stepper'
import ListgroupContainer from '../shared/styled/ListgroupContainer'

export default props => {
  const onClassicChange = value => {
    props.selectAds({ classicCount: value })
  }

  const onStandoutChange = value => {
    props.selectAds({ standoutCount: value })
  }

  const onPremiumChange = value => {
    props.selectAds({ premiumCount: value })
  }

  return (
    <div>
      <PageSubTitle>Select ads</PageSubTitle>

      <Row>
        <Col xs={12}>
          <ListgroupContainer>
            <ListGroup>
              <div className="list-group-item">
                <h4 className="list-group-item-heading">Classic</h4>
                <div className="list-group-item-text">
                  <div className="desc">
                    The most basic level of advertisement
                  </div>
                  <div className="count">
                    <Stepper
                      onChange={onClassicChange}
                      value={props.classicCount}
                    />
                  </div>
                </div>
              </div>

              <div className="list-group-item">
                <h4 className="list-group-item-heading">Standout</h4>
                <div className="list-group-item-text">
                  <div className="desc">
                    Display a company logo and use a longer presentation text
                  </div>
                  <div className="count">
                    <Stepper
                      onChange={onStandoutChange}
                      value={props.standoutCount}
                    />
                  </div>
                </div>
              </div>

              <div className="list-group-item">
                <h4 className="list-group-item-heading">Premium</h4>
                <div className="list-group-item-text">
                  <div className="desc">
                    Same benefits as Standout Ad, but also puts the ad at the
                    top of the results, allowing higher visibility
                  </div>
                  <div className="count">
                    <Stepper
                      onChange={onPremiumChange}
                      value={props.premiumCount}
                    />
                  </div>
                </div>
              </div>
            </ListGroup>
          </ListgroupContainer>
        </Col>
      </Row>
    </div>
  )
}
