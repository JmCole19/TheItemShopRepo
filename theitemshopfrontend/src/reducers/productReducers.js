import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../constants/productConstants";




// TAKE IN PREVIOUS STATE AND ACTION AND RETURN NEXT STATE OF PRODUCT LIST
function productListReducer(state= {products: []}, action){
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return{loading:true};
            case PRODUCT_LIST_SUCESS:
                return{loading:false, products: action.payload};
                case PRODUCT_LIST_FAIL:
                    return{loading: false, error: action.payload}
                    default:
                        return state;
    }
}
// TAKE IN PREVIOUS STATE AND ACTION AND RETURN NEXT STATE OF PRODUCT DETAILS
function productDetailsReducer(state= {product: {}}, action){
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return{loading:true};
            case PRODUCT_DETAILS_SUCCESS:
                return{loading:false, product: action.payload};
                case PRODUCT_DETAILS_FAIL:
                    return{loading: false, error: action.payload}
                    default:
                        return state;
    }
}

export {productListReducer, productDetailsReducer}