This starter kit is based from [davezuko's react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) and has following additional features.

- `redux-cli` integrated
- airbnb lint applied
- async api fetch sample added (with fetching reddit posts)
- `react-bootstrap` included with example
- `redux-form` included with login form example
- authentication and redirect example included
- introduce `yarn` instead of `npm`
- `transform-async-to-generator` for async/await
- use `axios` for http client
- add `promise-polyfill` for IE8 support
- add chart example with `recharts` library
- add `material-ui` component
- change dynamic routes to static
- upgrade react version 15.5.x

# Install

### `redux-cli`
```
yarn global add redux-cli
```

### node packages
```
yarn install
```

### redux devtools extension
https://github.com/zalmoxisus/redux-devtools-extension

# Lint
```
yarn lint
```

# Run (In Development)
```
yarn start
```

# Test
```
yarn test
```

# Deployment
```
yarn deploy:dev
yarn deploy:prod
```