import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { publicRequest, userRequest } from "../requestMethods"
import {
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    getProductFailure,
    getProductStart,
    getProductSuccess,
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
    addProductStart,
    addProductSuccess,
    addProductFailure
} from "./productRedux";

//login user
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}

//get ALL products
export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products")
        dispatch(getProductSuccess(res.data))
    } catch (err) {
        dispatch(getProductFailure())
    }
}

//delete product
export const deleteProducts = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
    } catch (err) {
        dispatch(deleteProductFailure())
    }
}

//update product
export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        //update axios !!!
        dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
        dispatch(updateProductFailure())
    }
}

//add product
export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await userRequest.post(`/products/add`, product)
        dispatch(addProductSuccess(res.data))
    } catch (err) {
        dispatch(addProductFailure())
    }
}