import React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <FooterContainer>
      <FooterText>{new Date().getFullYear()} My Job Dashboard.</FooterText>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  text-align: center;
  background: rgba(249, 249, 249, 0.7);
  border-top: solid 1px #eee;
  padding: 0.9rem 0;
`

const FooterText = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
`
