import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background: ${({ theme: { colors } }) => colors.secondary.dark};
  background-color: ${({ theme: { colors } }) => colors.secondary.dark};
  padding: ${({ theme: { spacing } }) => spacing.medium};
  text-align: center;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.huge};
  font-color: ${({ theme: { colors } }) => colors.primary.dark};
  color: ${({ theme: { colors } }) => colors.primary.dark};
`;

export default ({ headerText }) => (
  <Header>{headerText ? headerText : 'The header2'}</Header>
);
