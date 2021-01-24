import cakeReducer from "./cakes/cakesReducer";
import { createStore } from "redux";

const store = createStore(cakeReducer);

export default store;