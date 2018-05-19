import React, { PureComponent } from 'react'
import { Panel, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import PageSubTitle from '../shared/styled/PageSubTitle'
import ListgroupContainer from '../shared/styled/ListgroupContainer'
import numberWithCommas from '../../services/numberWithCommas'

export default class extends PureComponent {
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
                    <div className="count">{this.props.memberShipName}</div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="list-group-item-text">
                    <div className="desc">Classic Ads:</div>
                    <div className="count">{this.props.classicCount}</div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="list-group-item-text">
                    <div className="desc">Standout Ads:</div>
                    <div className="count">{this.props.standoutCount}</div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="list-group-item-text">
                    <div className="desc">Premium Ads:</div>
                    <div className="count">{this.props.premiumCount}</div>
                  </div>
                </div>

                <div className="list-group-item list-group-item-info">
                  <div className="list-group-item-text">
                    <div className="desc">Total price:</div>
                    <div className="count">
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
