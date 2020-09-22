[![CircleCI](https://circleci.com/gh/moskool/moskool-react-app.svg?style=svg&circle-token=25e17fbacf3e095631aba484af8169e19df89031)](https://moskool.com)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0b57ecbebd9b431c8071e0e42fb89b7b)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=mo-sharif/MoSkool&utm_campaign=Badge_Grade)

## What is this? 🤩

Great and simple getting started **Web App** template. You get a great front-end app paired with Firebase serverless technologies. Very easy to get started, just configure firebase and circle ci and you will have a fully up and running full-stack app. It's yours now do what you like with it 😜

## What does it do? 🤔

- Email and Social sign in
- Material-UI library with Dark mode
- Custom Components Library
- Custom Theme with Responsive mode
- Save and Read DB data from firestore collection.
- Admin and protected routes
- Single Page routing and lazy loading
- Built using Functional Components
- Simple state management with Higher order components and context API
- Circle CI ready (Builds and live deployment)
- Story book
- Prettier and Linter
- Commit hooks and commitizen
- Offline and PWA ready

# What do I need? 🤘

## [x][setup firebase account and get configs](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial)

[x] Update `YOUR_PROJECT` in `.circleci/config.yml` with your firebase info
[x] Setup Circle Ci deployments following this [firebase hosting deployment article](https://circleci.com/blog/automatically-deploy-a-gatsby-site-to-firebase-hosting/)
[x] Keep in mind the Firebase DB rules update per your use cases
[x] Have fun 🤘

# Helpful Resources

- [Get started 🚀](docs/ONBOARDING.md)
- [File Architecture](docs/ARCHITECTURE.md)
- [Firebase](docs/FIREBASE.md)
- [HOC](docs/HOC.md)
- [Material UI](docs/MATERIAL.md)
- [React Hooks](docs/REACT_HOOKS.md)
- [Store / State Management](docs/STATE_MANAGEMENT.md)
- [Styling](docs/STYLING.md)
- [Testing](docs/TESTING.md)

# Current Tech

User Interface is powered by a React frontend, paired with a Firebase serverless backend

# Getting Started

- Install `yarn`
- Start `yarn start`

- check yarn dependencies for updates `yarn check-updates`
- build `yarn build`
- test `yarn test`

# 3rd Party Dependencies

- Material UI + icons
- @sentry/browser for monitoring prod for console errors
- firebase
- [material-table](https://material-table.com/#/), an admin tool for adding questions
- [react-live](https://github.com/FormidableLabs/react-live): code editor + live preview + error debugger
- [react-typist](https://github.com/jstejada/react-typist): typist effect seen throughout
- [react-hook-form](https://react-hook-form.com/get-started): Helps you create forms easily
- [use-global-hook](https://www.npmjs.com/package/use-global-hook): Easy state management using hooks
- [string-similarity](https://www.npmjs.com/package/string-similarity): Compare two strings and get a matching percentage between the strings
- [recompose](https://github.com/acdlite/recompose): used to compose a wrappedComponent with multiple HOCs

DEV Dependencies:

- [react-test-renderer](https://reactjs.org/docs/test-renderer.html): used for testing along side Jest
- husky for pre-push and comments
- commitizen for commits
- Prettier code formatting
- ESlint code linter

# Mind Map

[Architecture and components mind map 🗺](https://www.mindmeister.com/1454606428/pages-containers)

# Storybook

http://localhost:9009/
