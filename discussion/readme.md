# React Component Spike

## Why React?

A frontend library for building UI components

- Significantly larger pool of applicants
- Frontent state (many options... react-query, React Contexts, Redux, Jotai, Zustand, etc.)
- Non blocking UI code ([React Skeleton Example](https://index.simulationhockey.com/shl/leaders?tab=Skaters))
  - This has more to do with our implementation of RxJS than React vs Angular, but I think it shows a prime example of why we should move away from RxJS
- More community support, the field seems to have "chosen" React at this point in time

### GitHub Metrics

#### React

[![React Github](./images/react-github.png)](https://github.com/facebook/react)

#### Angular

[![Angular Github](./images/angular-github.png)](https://github.com/angular)

### State of JS Metrics (2022)

#### Legend

[![State of JS Legend](./images/sojs-legend.png)](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/)

#### Retention

[![State of JS Retention](./images/sojs-retention.png)](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/)

#### Interest

[![State of JS Interest](./images/sojs-interest.png)](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/)

#### Usage

[![State of JS Usage](./images/sojs-usage.png)](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/)

## Why Vite?

A build tool for making javascript applications

### Superior Development Experience

- Dependency pre-bundling
- Native ES modules
- Hot module replacement
- (Show example of changing text in Angular app vs React-Vite app)

### Other Features

- Typescript
- Supports tree-shaking and code splitting
- Bundles for production using rollup (no native ES modules for prod)
- Supports SSR with client side hydration

[Vite Features](https://vitejs.dev/guide/features.html)

## Bootstrap vs Material UI vs Tailwind

### Bootstrap

Pros:

- Famililar class names

```js
<div className="d-flex justify-content-center align-items-center">
  Styled div
</div>
```

[Bootstrap Flexbox](https://getbootstrap.com/docs/4.0/utilities/flex/)

Cons:

- Comes with a set of predefined styles we'll have to selectively change as needed
- Long strings of class names

### Tailwind

Pros:

- Unopinionated
- Extremely fast to work with
- Famililar class names

```js
<div className="flex justify-center items-center">Styled div</div>
```

[Tailwind Flexbox](https://tailwindcss.com/docs/flex)

Cons:

- Everything from scratch
- Long strings of class names

### Material UI

Pros:

- Theme providers can be used to standardize styling and expidite development
- Elegant styled API for created styled components

```js
import React from "react";
import { styled } from "@mui/system";

const StyledDiv = styled.div`
  display: "flex";
  justify-content: "center";
  align-items: "center";
`;

export default function StyledDivExample() {
  return <StyledDiv>Styled div</StyledDiv>;
}
```

[MUI Styled](https://mui.com/system/styled/)

Cons:

- Huge bundle size
- If we don't commit to the Material UI design pattern we will be fighting it every step of the way
- Duplicate styled components can get out of hand

### Final Thoughts

The question is essentially, what level of customizability to do we want? The levels are pretty clear to me:

- Full customizability without an opinionated start (Tailwind)
- Customizability with an opinionated start (Bootstrap)
- Commit to someone else's design patterns (Material UI)

I don't think any of these are bad options. We don't need to be creating a completely unique website without the design patterns and opinions of someone else. But if that is what we are trying to do, Tailwind of Bootstrap would be the choices.
