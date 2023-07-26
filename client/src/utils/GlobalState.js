// // import React, { createContext, useContext } from "react";
// import React from "react";
// import { useProductReducer } from './reducers'
// import { configureStore } from '@reduxjs/toolkit';


// // const StoreContext = createContext();
// // const { Provider } = StoreContext;

// const store = configureStore({ reducer: useProductReducer });
// const { Provider } = store;

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: '',
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };
