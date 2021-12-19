import React from "react";
import { useProductReducer } from "./reducers";

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: "",
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

const useStoreContext = () => {
  return useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  });
};

export { useStoreContext };

//StoreProvider
