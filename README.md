This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Project setup

The project has been setup with standard React and StyledComponents (using theme)

- A Router (`react-router-dom`) is wrapping the application.
- A ThemeProvider is wrapping the styling.
  The rest of the setup is plain React.

## Styled Components ThemeProvider

The theme in _theme.js_ is a **ThemeProvider** from `styled-components`.
It has a basic structure of:

- colors (primary, secodary, tertiary, success, danger, warning, action, greyscale)
- spacing
- fonts
- fontsizes
- breakpoints

### Colors

The scale of colors has 5 levels moving from light to dark with default being _base_ given in _px_.

- dark
- darker
- _base_
- lighter
- light

### Spacing and FontSizes

The scale of Spacing and FontSizes have 10 levels and no real default and given in _rem_

- none
- microscopic
- tiny
- xsmall
- small
- medium
- large
- xlarge
- huge
- humongous

### Breakpoints

The scale of Breakpoints has 5 levels and is given in _px_.

- xsmall
- small
- medium
- large
- xlarge

Scale conventions are used throughout based on the xslamm, small, medium, large, xlarge default with added flexibility for entities requiring more granularity.

## Components and pages

There are basically three different component types: pages, blocks and atoms

### Pages

Pages are thought out to be entire pre-defined pages and a startingpoint. The name pages are used in order to comply with the naming of for example _next.js_.

### Blocks

Blocks are thought to be smaller complex or combined components. These can be seen as partials, mixins or reusable entities such as for example navigation, accordions, carousel, footer, listings and gallery blocks.

### Atoms and Tokens

The smallest types of components are named atoms due to being one entity. Typically buttons, typography, dividers are examples of these.

## The EXAMPLE component : Button

Investigating the Button component one can see the following pattern:

- Base
- Type adjustment
- Variant adjustment

### The Base

The base style is simply a definition of CSS with no markup. Can be initiated with a `<Button>` tag.

### Type adjustment

By providing a type a specific set of coloration within the base can be returned. It is adjusting style by theme attributes. Can be initiated with a `<Button primary>` tag.

### Variant adjustment

By providing a variant, specific behavior and attributes are set on the element, for example `border-color`. It is also using the theme attributes. They are extending the base `<Button>` behavior. Can be initiated with a `<ButtonOutline>` tag.

### Combining base, type and variants

The idea is that the three can ba combined in a flexible manner.
For example an instance of a button can be invoked using the following syntax: `<ButtonOutline secondary>` having the base extended with an outline variant of the type (coloration) of secondary.

### Challenges

Since the variants have need for specific color-sets outside of the atomic base component, a shortcut has been made to hardcoded `border-color` to theme color grayscale. This is a weakness which can be solved in a more general manner for example with a secondary type or passing other props to the component. The same challenge can be seen is a `<BottonRounded>` should have a different border-radius from the `<Button>` base component.

# Technical setup documentation

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
