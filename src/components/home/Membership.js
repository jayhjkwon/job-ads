import React from 'react'
import { Row, Col } from 'react-bootstrap'
import PageSubTitle from '../shared/styled/PageSubTitle'
import MembershipCard from './MembershipCard'

export default props => {
  return (
    <div>
      <PageSubTitle>Select a membership</PageSubTitle>

      <Row>
        <Col sm={6}>
          <MembershipCard title="Unilever" {...props}>
            <ul>
              <li>Ges a for 3 for 2 deal on Classic Ads</li>
            </ul>
          </MembershipCard>
        </Col>
        <Col sm={6}>
          <MembershipCard title="Apple" {...props}>
            <ul>
              <li>
                Gets a discount on Standout Ads where the price drops to $299.99
                per ad
              </li>
            </ul>
          </MembershipCard>
        </Col>
        <Col sm={6}>
          <MembershipCard title="Nike" {...props}>
            <ul>
              <li>
                Gets a discount on Premium Ads when 4 or more are purchased. The
                price drops to $379.99 per ad
              </li>
            </ul>
          </MembershipCard>
        </Col>
        <Col sm={6}>
          <MembershipCard title="Ford" {...props}>
            <ul>
              <li>Gets a 5 for 4 deal on Classic Ads</li>
              <li>
                Gets a discount on Standout Ads where the price drops to $309.99
                per ad
              </li>
              <li>
                Gets a discount on Premium Ads when 3 or more are purchased. The
                price drops to $389.99 per ad
              </li>
            </ul>
          </MembershipCard>
        </Col>
      </Row>
    </div>
  )
}
