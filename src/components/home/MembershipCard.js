import React from 'react'
import { Panel, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import PageSubTitle from '../shared/styled/PageSubTitle'

export default props => {
  const handleMembershipClick = e => {
    props.selectMembership(props.title.toLowerCase())
  }

  return (
    <PanelContainer>
      <Panel
        onClick={handleMembershipClick}
        bsStyle={
          props.title.toLowerCase() === props.memberShipName
            ? 'primary'
            : 'default'
        }
      >
        <Panel.Heading>{props.title}</Panel.Heading>
        <Panel.Body>{props.children}</Panel.Body>
      </Panel>
    </PanelContainer>
  )
}

const PanelContainer = styled.div`
  cursor: pointer;

  &:hover .panel-heading {
    font-weight: 800;
  }

  &.active {
  }

  & .panel-body {
    text-align: left;
    min-height: 150px;
    font-size: 0.8rem;

    & ul {
      padding-left: 20px;
    }
  }
`
