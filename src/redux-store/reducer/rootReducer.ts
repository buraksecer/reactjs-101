import allProductSlice from "./allProductSlice";

const rootReducer = () => {
    return {
        allProduct: allProductSlice,
    }
}

export default rootReducer;