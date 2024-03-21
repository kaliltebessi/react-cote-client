import { combineReducers } from "redux";
import events from "./slices/eventsSlice.js";
import wishlist from "./slices/wishlistSlice.js";

const reducers = combineReducers({
    events ,
    wishlist, // wishlist
})
export default reducers ;