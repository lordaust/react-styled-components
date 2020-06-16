import styled from 'styled-components';
//import { Link } from 'react-router';

export const StyledLink = styled.div`
  a {
    color: ${({ theme: { colors } }) => colors.primary.dark};
    font-weight: ${({ theme: { fontSizes } }) => fontSizes.small};
    cursor: pointer;
  }
`;

export const StyledLinkButton = styled(StyledLink)`
  background: ${({ theme: { colors } }) => colors.primary.light};
  color: ${({ theme: { colors } }) => colors.primary.dark};

  padding-top: ${({ theme: { spacing } }) => spacing.small};
  padding-right: ${({ theme: { spacing } }) => spacing.medium};
  padding-bottom: ${({ theme: { spacing } }) => spacing.small};
  padding-left: ${({ theme: { spacing } }) => spacing.medium};

  margin-top: ${({ theme: { spacing } }) => spacing.small};
  margin-bottom: ${({ theme: { spacing } }) => spacing.small};
  margin-right: ${({ theme: { spacing } }) => spacing.large};
  margin-left: ${({ theme: { spacing } }) => spacing.large};
`;
