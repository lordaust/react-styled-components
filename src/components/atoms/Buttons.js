import styled, { css } from 'styled-components';

export const Button = styled.button`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.tiny};

  background: ${({ theme: { colors } }) => colors.grayscale.lighter};
  color: ${({ theme: { colors } }) => colors.grayscale.darker};
  cursor: pointer;

  padding-top: ${({ theme: { spacing } }) => spacing.small};
  padding-right: ${({ theme: { spacing } }) => spacing.medium};
  padding-bottom: ${({ theme: { spacing } }) => spacing.small};
  padding-left: ${({ theme: { spacing } }) => spacing.medium};
  margin-top: ${({ theme: { spacing } }) => spacing.small};
  margin-bottom: ${({ theme: { spacing } }) => spacing.small};
  margin-right: ${({ theme: { spacing } }) => spacing.large};
  margin-left: ${({ theme: { spacing } }) => spacing.large};

  ${({ theme: { spacing }, xsmall }) =>
    xsmall &&
    css`
      padding-top: ${({ theme: { spacing } }) => spacing.xsmall};
      padding-right: ${({ theme: { spacing } }) => spacing.xsmall};
      padding-bottom: ${({ theme: { spacing } }) => spacing.xsmall};
      padding-left: ${({ theme: { spacing } }) => spacing.xsmall};
      margin-top: ${({ theme: { spacing } }) => spacing.xsmall};
      margin-bottom: ${({ theme: { spacing } }) => spacing.xsmall};
      margin-right: ${({ theme: { spacing } }) => spacing.xsmall};
      margin-left: ${({ theme: { spacing } }) => spacing.xsmall};
    `};
  ${({ theme: { spacing }, small }) =>
    small &&
    css`
      padding-top: ${({ theme: { spacing } }) => spacing.small};
      padding-right: ${({ theme: { spacing } }) => spacing.small};
      padding-bottom: ${({ theme: { spacing } }) => spacing.small};
      padding-left: ${({ theme: { spacing } }) => spacing.small};
      margin-top: ${({ theme: { spacing } }) => spacing.small};
      margin-bottom: ${({ theme: { spacing } }) => spacing.small};
      margin-right: ${({ theme: { spacing } }) => spacing.small};
      margin-left: ${({ theme: { spacing } }) => spacing.small};
    `};
  ${({ theme: { spacing }, medium }) =>
    medium &&
    css`
      padding-top: ${({ theme: { spacing } }) => spacing.medium};
      padding-right: ${({ theme: { spacing } }) => spacing.medium};
      padding-bottom: ${({ theme: { spacing } }) => spacing.medium};
      padding-left: ${({ theme: { spacing } }) => spacing.medium};
      margin-top: ${({ theme: { spacing } }) => spacing.medium};
      margin-bottom: ${({ theme: { spacing } }) => spacing.medium};
      margin-right: ${({ theme: { spacing } }) => spacing.medium};
      margin-left: ${({ theme: { spacing } }) => spacing.medium};
    `};

  ${({ theme: { colors }, primary }) =>
    primary &&
    css`
      background: ${colors.primary.light};
      color: ${colors.primary.dark};
    `};

  ${({ theme: { colors }, secondary }) =>
    secondary &&
    `
      background: ${colors.secondary.light};
      color: ${colors.secondary.dark};
    `};

  ${({ theme: { colors }, tertiary }) =>
    tertiary &&
    css`
      background: ${colors.tertiary.light};
      color: ${colors.tertiary.dark};
    `};

  ${({ theme: { colors }, success }) =>
    success &&
    css`
      background: ${colors.success.light};
      color: ${colors.success.dark};
    `};

  ${({ theme: { colors }, danger }) =>
    danger &&
    `
      background: ${colors.danger.light};
      color: ${colors.danger.dark} ;
    `};
  ${({ theme: { colors }, warning }) =>
    warning &&
    `
      background: ${colors.warning.light};
      color: ${colors.warning.dark} ;
    `};

  ${({ theme: { colors }, action }) =>
    action &&
    `
      background: ${colors.action.light};
      color: ${colors.action.dark} ;
    `};

  :hover {
    background: ${({ theme: { colors } }) => colors.grayscale.base};
    color: ${({ theme: { colors } }) => colors.grayscale.dark};
  }
`;

export const ButtonOutline = styled(Button)`
  border: ${({ theme: { spacing } }) => spacing.tiny} solid;
  border-color: ${({ theme: { colors } }) => colors.action.base}
    ${({ theme: { colors } }) => colors.action.base}
    ${({ theme: { colors } }) => colors.action.dark};
`;

export const ButtonRounded = styled(Button)`
  border-radius: ${({ theme: { spacing } }) => spacing.xlarge};
  border: ${({ theme: { spacing } }) => spacing.tiny} solid;
  border-color: ${({ theme: { colors } }) => colors.action.base};
`;

export const ButtonNoBorder = styled(Button)`
  border: ${({ theme: { spacing } }) => spacing.none};
  border-color: ${({ theme: { colors } }) => colors.grayscale.light};
`;
