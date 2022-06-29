import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "../reducers";

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

// import { configureStore, current } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import circuit from "../reducers/circuit";
// import driver from "../reducers/driver";
// import historic from "../reducers/historic";
// import qualifying from "../reducers/qualifying";
// import race from "../reducers/race";
// import schedule from "../reducers/schedule";

// const preloadedState = {
//   circuit: {
//     selectedCircuit: "",
//     qualifyingResults: [],
//     raceResults: [],
//     year: "current",
//   },
//   driver: {},
//   historic: {
//     drivers: [],
//     seasons: [],
//   },
//   qualifying: {
//     year: new Date().getFullYear(),
//     poles: [],
//     seasons: [],
//   },
//   race: {
//     year: current,
//   },
//   schedule: {
//     year: "current",
//   },
// };

// export const store = configureStore({
//   reducer: {
//     circuit,
//     driver,
//     historic,
//     qualifying,
//     race,
//     schedule,
//   },
//   devTools: process.env.NODE_ENV !== "production",
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
//   preloadedState,
// });

// import { useMemo } from "react";
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "../reducers/index";

// let store;

// function initStore(initialState) {
//   return createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunk))
//   );
// }

// export const initializeStore = (preloadedState) => {
//   let _store = store ?? initStore(preloadedState);

//   // After navigating to a page with an initial Redux state, merge that state
//   // with the current state in the store, and create a new store
//   if (preloadedState && store) {
//     _store = initStore({
//       ...store.getState(),
//       ...preloadedState,
//     });
//     // Reset the current store
//     store = undefined;
//   }

//   // For SSG and SSR always create a new store
//   if (typeof window === "undefined") return _store;
//   // Create the store once in the client
//   if (!store) store = _store;

//   return _store;
// };

// export function useStore(initialState) {
//   const store = useMemo(() => initializeStore(initialState), [initialState]);
//   return store;
// }
