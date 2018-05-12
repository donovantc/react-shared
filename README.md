# react-shared
[![Build Status](https://travis-ci.org/donovantc/react-shared.svg?branch=master)](https://travis-ci.org/donovantc/react-shared) [![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)

A React and React Native project all in one.
This is a very basic setup which includes the minimum (or near minimum) required to have a React web app and a React Native (iOS and Android) app in one project.

## Getting started

Clone this repo and, assuming you have [yarn](https://yarnpkg.com/lang/en/) installed, run `yarn` to install all dependencies.

To run the web app from the command line:

```
yarn run web
```

To run the native application, make sure you have your environment setup for [React Native](https://facebook.github.io/react-native/docs/getting-started.html) development.

Start the deployment server for the React Native app:

```
yarn start
```

To run the iOS app in the simulator (macOS):

```
yarn run ios
```

Or run the app by opening the project in XCode and proceeding there.

To run the android app in an emulator or connected device:

```
yarn run android
```

## Understanding the structure

The basic principle is that the file extensions, in combination with webpack and the React Native configuration, are used to indicate what is relevant, for which platform (web or native).

`.js` files are interpreted by both web and native builds and are used to share common functionality

`.jsx` or `.web.js` files are interpreted by only web builds and are used to render only web specific content

`.native.js` files are interpreted by only native builds (iOS and android) and are used to render only native specific content.

This concept is used throughout the project in order to provide flexibility when needed. 

One thing to keep in mind is that any librarires/frameworks/sdks that are installed, can only be used where they are relevant for the their respective platform.

For example, using `View` from `react-native` inside a `.js` file will not work if this `.js` file is imported into any of the files used by the web app.

## Add new components

Adding new components according this structure is simple.

```
yarn run component [path/componentName]
```

Example:
```
yarn run component app/components/Example2
```

This will create a directory inside of app/components, with the following structure:
```sh
Example2
├── __tests__
    ├── Example2.test.native.js  
    ├── Example2.test.web.js  
├── index.js
├── Example2.web.js
├── Example2.native.js
```

This is achieved due to [this library](https://github.com/donovantc/create-react-component-folder/blob/master/README.md) which is a fork of [create-react-component-folder](https://github.com/snaerth/create-react-component-folder) adapted for the needs of react-shared.

## Testing

This project includes the configuration for [enyzme](http://airbnb.io/enzyme/) and [Jest](https://facebook.github.io/jest/en/) snapshot testing on web and native platforms. Tests are included in the `__tests__` directory of their associated component. Test files for web need to have the file extensions `.test.web.js` and for native `.test.native.js.`

To run tests, simply execute:

```
yarn test
```

To run tests for web only, execute:

```
yarn run test:web
```

To run tests for native only, execute:

```
yarn run test:native
```

## Future work

Where this concept and structure becomes very useful, is when sharing business logic inside the application with one of the many application state management approaches (e.g. Redux, mobx). Taking Redux, for example, to a very large extent, a lot of the Redux Actions / Reducers / Middlewares can be shared between all platforms. I purposely left this implementation out so since so that each user can apply their own application state management.

When some functionality specific to a platfrom is required, it can usually just be split into a `.native.js` file for the native functionality.

However, I would like to create a project generator which will create a new project based on this structure.

## Contribution
Your contibution is of course welcome. Simply create a pull request with a good description and I'll review it as soon as I can.

Feel free to report any issues.
