# reactshared
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

`.jsx` files are interpreted by only web builds and are used to render only web specific content

`.native.js` files are interpreted by only native builds (iOS and android) and are used to render only native specific content.

This concept is used throughout the project in order to provide flexibility when needed. 

One thing to keep in mind is that any librarires/frameworks/sdks that are installed, can only be used where they are relevant for the their respective platform.

For example, using `View` from `react-native` inside a `.js` file will not work if this `.js` file is imported into any of the files used by the web app.

## Future work
Where this concept and structure becomes very useful, is when sharing business logic inside the application with Redux. It implies that, to a very large extent, a lot of the Redux Actions / Reducers / Middlewares can be shared between all platforms. 

When some functionality specific to a platfrom is required, it can usually just be split into a `.native.js` file for the native functionality.

A new repo, extending this one will provide a a boilerplate project using this approach together with Redux. _Still work in progress._
