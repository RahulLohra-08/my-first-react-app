import { data } from "autoprefixer";
import { act } from "react-dom/test-utils";
import { ADD_TO_CART } from "../constants";
import { REMOVE_TO_CART } from "../constants";

// const initialState = {
//     numberCart:0,
//     Carts:[],
//     _products:[]
// }


export default function cardItem(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("state", state, action.data);
      // return state + action.data;
      const product = action.data;

      state.push(product);
      console.log("STATE", state);
      return [...state ];

    case REMOVE_TO_CART:
      console.log("action");

      state.pop(); // ek item ko kam kar dega.
      return [
        ...state,
        // cardData: action.data // new item add nhi karna hai
      ];


    default:
      return state; // jab khuch bhi match match nhi hota hai tab ye state chalta h
  }
}
