import styled, { css } from 'styled-components';

export const H1 = styled.h1`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
  font-weight: ${({ theme: { fontSizes } }) => fontSizes.tiny};
  line-height: ${({ theme: { fontSizes } }) => fontSizes.tiny};

  color: ${({ theme: { colors } }) => colors.grayscale.darker};

  ${({ theme: { colors }, primary }) =>
    primary &&
    css`
      color: ${colors.primary.dark};
    `};

  ${({ theme: { colors }, secondary }) =>
    secondary &&
    `
      color: ${colors.secondary.dark};
    `};

  ${({ theme: { colors }, tertiary }) =>
    tertiary &&
    css`
      color: ${colors.tertiary.dark};
    `};

  ${({ theme: { colors }, success }) =>
    success &&
    css`
      color: ${colors.success.dark};
    `};

  ${({ theme: { colors }, danger }) =>
    danger &&
    `
      color: ${colors.danger.dark} ;
    `};
  ${({ theme: { colors }, warning }) =>
    warning &&
    `
      color: ${colors.warning.dark} ;
    `};

  ${({ theme: { colors }, action }) =>
    action &&
    `
      color: ${colors.action.dark} ;
    `};
`;

export const H2 = styled(H1)`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
`;
export const H3 = styled(H1)`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
`;
export const H4 = styled(H1)`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xsmall};
`;
export const H5 = styled(H1)`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.tiny};
`;
export const H6 = styled(H1)`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.microscopic};
`;
