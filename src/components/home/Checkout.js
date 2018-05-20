import React, { Component } from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'
import PageSubTitle from '../shared/styled/PageSubTitle'
import ListgroupContainer from '../shared/styled/ListgroupContainer'
import numberWithCommas from '../../services/numberWithCommas'

export default class extends Component {
  componentDidMount() {
    this.props.checkout()
  }

  render() {
    return (
      <div>
        <PageSubTitle>Checkout</PageSubTitle>

        <Row>
          <Col xs={12}>
            <ListgroupContainer>
              <ListGroup>
                <div className="list-group-item">
                  <div className="list-group-item-text">
                    <div className="desc">Membership:</div>
                    <div className="count membership-name">
                      {this.props.membershipName || 'Default'}
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="list-group-item-text">
                    <div className="desc">Classic Ads:</div>
                    <div className="count classic">
                      {this.props.classicCount}
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="list-group-item-text">
                    <div className="desc">Standout Ads:</div>
                    <div className="count standout">
                      {this.props.standoutCount}
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="list-group-item-text">
                    <div className="desc">Premium Ads:</div>
                    <div className="count premium">
                      {this.props.premiumCount}
                    </div>
                  </div>
                </div>

                <div className="list-group-item list-group-item-info">
                  <div className="list-group-item-text">
                    <div className="desc">Total price:</div>
                    <div className="count total-price">
                      ${numberWithCommas(this.props.totalPrice)}
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
}
