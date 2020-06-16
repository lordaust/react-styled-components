import styled, { css } from 'styled-components';

export const Divider = styled.div`
  height: ${({ theme: { spacing } }) => spacing.tiny};
  background-color: ${({ theme: { colors } }) => colors.grayscale.darker};
  overflow: hidden;
  display: block;

  ${({ theme: { colors }, primary }) =>
    primary &&
    css`
      background-color: ${colors.primary.base};
    `};

  ${({ theme: { colors }, secondary }) =>
    secondary &&
    `
      background-color: ${colors.secondary.base};
    `};

  ${({ theme: { colors }, tertiary }) =>
    tertiary &&
    css`
      background-color: ${colors.tertiary.base};
    `};

  ${({ theme: { colors }, success }) =>
    success &&
    css`
      background-color: ${colors.success.base};
    `};

  ${({ theme: { colors }, danger }) =>
    danger &&
    `
      background-color: ${colors.danger.base};
    `};
  ${({ theme: { colors }, warning }) =>
    warning &&
    `
      background-color: ${colors.warning.base};
    `};

  ${({ theme: { colors }, action }) =>
    action &&
    `
      background-color: ${colors.action.base};
    `};
  ${({ theme: { colors }, grayscale }) =>
    grayscale &&
    `
      background-color: ${colors.grayscale.base};
    `};
`;

export const DividerMicroscopic = styled(Divider)`
  height: ${({ theme: { spacing } }) => spacing.microscopic};
`;

export const DividerTiny = styled(Divider)`
  height: ${({ theme: { spacing } }) => spacing.tiny};
`;

export const DividerXsmall = styled(Divider)`
  height: ${({ theme: { spacing } }) => spacing.xsmall};
`;
export const DividerSmall = styled(Divider)`
  height: ${({ theme: { spacing } }) => spacing.small};
`;
export const DividerMedium = styled(Divider)`
  height: ${({ theme: { spacing } }) => spacing.medium};
`;
export const DividerLarge = styled(Divider)`
  height: ${({ theme: { spacing } }) => spacing.large};
`;
