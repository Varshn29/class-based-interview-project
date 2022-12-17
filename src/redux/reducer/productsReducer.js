import { GET_PRODUCTS_LIST, GET_PRODUCTS_LIST_FAILURE, GET_PRODUCTS_LIST_SUCCESS } from '../action/constants';

const initialState = {
    isLoading: false,
    productsListData: [],
    error: null,
}

export const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_LIST: {
            return { ...state, isLoading: true }
        }
        case GET_PRODUCTS_LIST_SUCCESS: {
            return { ...state, productsListData: action.payload, isLoading: false }
        }
        case GET_PRODUCTS_LIST_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state;
    }
}