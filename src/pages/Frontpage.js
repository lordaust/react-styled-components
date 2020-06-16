import React from 'react';

import {
  Button,
  ButtonOutline,
  ButtonRounded,
  ButtonNoBorder,
} from '../components/atoms/Buttons';

import {
  Divider,
  DividerMicroscopic,
  DividerTiny,
  DividerXsmall,
  DividerSmall,
  DividerMedium,
  DividerLarge,
} from '../components/atoms/Dividers';

import { H1, H2, H3, H4, H5, H6 } from '../components/atoms/Typography';

import { StyledLink, StyledLinkButton } from '../components/atoms/Links';

function FrontPage() {
  return (
    <>
      <H1>Frontpage</H1>
      <Divider />
      <H2>Buttons</H2>
      <Divider success />
      <Button> Button </Button>
      <Button grayscale xsmall>
        Button grayscale xsmall
      </Button>
      <Button primary> Button primary </Button>
      <Button secondary>Button secondary</Button>
      <Button tertiary>Button tertiary</Button>
      <Button success>Button success</Button>
      <Button danger>Button danger</Button>
      <Button warning>Button warning</Button>
      <Button action>Button action</Button>
      <Button info>Button info</Button>
      <ButtonNoBorder>ButtonNoBorder</ButtonNoBorder>
      <ButtonNoBorder success>ButtonNoBorder success</ButtonNoBorder>
      <ButtonOutline> ButtonOutline </ButtonOutline>
      <ButtonOutline secondary> ButtonOutline secondary </ButtonOutline>
      <ButtonRounded> ButtonRounded </ButtonRounded>
      <ButtonRounded primary> ButtonRounded primary</ButtonRounded>
      <Divider />
      <H2>Dividers</H2>
      <Divider success />
      DividerMicroscopic
      <DividerMicroscopic />
      DividerTiny
      <DividerTiny />
      DividerXsmall
      <DividerXsmall />
      DividerSmall
      <DividerSmall />
      DividerSmall success
      <DividerSmall success />
      DividerSmall danger
      <DividerSmall danger />
      DividerMedium
      <DividerMedium />
      DividerLarge
      <DividerLarge />
      DividerLarge warning
      <DividerLarge warning />
      <Divider />
      <H2>Typography</H2>
      <DividerSmall success />
      <H1>Heading 1 - H1</H1>
      <DividerMicroscopic grayscale />
      <H2>Heading 2 - H2</H2>
      <DividerMicroscopic grayscale />
      <H3>Heading 3 - H3</H3>
      <DividerMicroscopic grayscale />
      <H4>Heading 4 - H4</H4>
      <DividerMicroscopic grayscale />
      <H5>Heading 5 - H5</H5>
      <DividerMicroscopic grayscale />
      <H6>Heading 6 - H6</H6>
      <DividerMicroscopic grayscale />
      <Divider />
      <H2>Links</H2>
      <DividerSmall success />
      <DividerMicroscopic grayscale />
      <StyledLink to={'#'}>A styled Link</StyledLink>
      <DividerMicroscopic grayscale />
      <StyledLinkButton to={'#'}>A styled LinkButton</StyledLinkButton>
      <DividerMicroscopic grayscale />
    </>
  );
}

export default FrontPage;
