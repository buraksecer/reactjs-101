import allProductSlice from "./allProductSlice";
import userSlide from "./userSlice";

export default function rootReducer () {
    return {
        allProduct: allProductSlice,
        user: userSlide
    }
}
