# App structure

# Store

The Store holds the application’s state tree. The app's Store is created in `store/configureStore.js` using `createStore(reducer, initialState)` - we pass it a single reducer, as all reducers are combined in `reducer/index.js` using `combineReducers(reducers)`. The second argument (initialState) is useful for hydrating the state of the client to match the state of a Redux application running on the server.

> All combineReducers() does is generate a function that calls your reducers with the slices of state selected according to their keys, and combining their results into a single object again.

Actions are dispatched to the Store, which in turn calls the given Reducer function to alter the app's state. It is common practice to use a 'root reducer' when creating a store - this combines the output of multiple reducers into a single state tree. Each reducer is only concerned with its branch of the global state tree but these branches are then re-assembled by the root reducer and returned to the Store. The Store then saves the complete state tree returned by the root reducer. See more about [Redux's unidirectional data flow](http://rackt.github.io/redux/docs/basics/DataFlow.html).

# Reducers

A Redux reducer is a function that accepts the application's state (or part of it) and an action and returns a new state based on the previous state and the action. In the reducer composition pattern (abstracting/combining reducers based on their roles) a reducer manages its own part of the global state - rather than a single, encompassing reducer that takes the entire app's state as an argument. The `state` parameter is different for every reducer and corresponds to the part of the state it manages. A reducer should always be a **pure** function - ie. without side-effects such as mutating its arguments or making API calls.

The state must never be mutated directly - instead create a copy with [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) and return the new object. New items can be added to the state using the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator). Here's an example:

```
switch (action.type) {
case ADD_TODO:
  return Object.assign({}, state, {
    todos: [...state.todos, {
      text: action.text,
      completed: false
    }]
  });
default:
  return state;
}
```

# Actions

The files in `action/*.js` are actually Action Creators (a function that creates an action) that contain actions (payloads of information that represent an intention to change the application's state). These Action Creators are turned into an object with each Action Creator wrapped in a dispatch call - using [bindActionCreators](http://rackt.github.io/redux/docs/api/bindActionCreators.html) on the Container - and passed to a component as props (accessed via this.props).

Actions can pass data to Reducers for use in altering the state - see [Flux Standard Action](https://github.com/acdlite/flux-standard-action) for info on constructing actions.

Actions can be dispatched from anywhere in your app: components and XHR callbacks or even at scheduled intervals.

*TODO -> how can dynamic data be passed to an Action from a Component event?*

# Containers (aka smart components)

Containers are similar to Views: they render Components with Actions bound to the them. Containers directly call Actions and provide them as callbacks to Components - Components do not directly call Actions. They are also known as ['Container Components'](https://medium.com/@learnreact/container-components-c0e67432e005) or *'smart'* components. These components handle Redux setup, data fetching, hold state and pass it to Components. They do not usually render any markup to the DOM or have their own CSS.

Container Components are converted to *['smart components'](https://github.com/rackt/react-redux#smart-component-is-connect-ed-to-redux)* using the `connect()` function provided by the `react-redux` API.

> The connect() function lets you specify which exact state from the Redux store your component wants to track. This lets you subscribe on any level of granularity.

This allows the 'dumb' Components to be reused and not bound to specific data.

# Components (aka dumb components)

React components that can have UI triggers to dispatch Actions and render the application's state on the client via component-specific `props` passed to it from its Container. These components do not normally know about Redux or deal with it directly - they can be referred to as *['dumb components'](https://github.com/rackt/react-redux#dumb-component-is-unaware-of-redux)*. Dumb Components have no dependencies on Actions or Stores, receive data (state) and callbacks via `props` - although they don't have their *own* state. They render markup to the DOM and have CSS.

Read more about [smart/dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

## app.js

Renders the React application to the DOM.

## container/Root.js

Sets up the application's Routing (using [react-router v1.0.0-beta3](https://github.com/rackt/react-router/tree/master)) - each Route takes a Container as its parent component. The Containers then render any child components. The `App` container is used as the parent Route and renders all other child Routes dynamically based on the path - this is also where any master navigation component lives. The Root container also hooks `react-redux` to the Redux store using the Provider component - this makes the store available to the `connect()` calls in the component hierarchy below.