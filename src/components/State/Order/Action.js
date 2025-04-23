import { api } from "../../config/api"
import { GET_USERS_NOTIFICATION_FAILURE, GET_USERS_NOTIFICATION_SUCCESS } from "./ActionType"

export const createOrder = (reqData) => {
    return async (dispatch) => {
        dispatch({type:CREATE_ORDER_REQUEST});
        try {
            const {data} = await api.post("/order", reqData.order, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                }
            });
            //if (data.payment_url) {
            //    window.location.href=data.payment_url;
            //}
            console.log("Order created successfully", data);
            dispatch({type:CREATE_ORDER_SUCCESS, payload:data});
        } catch (error) {
            console.error("Error creating order", error);
            dispatch({type:CREATE_ORDER_FAILURE, payload:error});
        }
    }
}

export const getUsersOrders = (jwt) => {
    return async (dispatch) => {
        dispatch({type: GET_USERS_ORDERS_REQUEST})
        try {
            const {data} = await api.get("/api/order/user", {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
            console.log("Fetched users orders successfully", data);
            dispatch({type: GET_USERS_ORDERS_SUCCESS, payload:data});
        } catch (error) {
            console.error("Error fetching users orders", error);
            dispatch({type: GET_USERS_ORDERS_FAILURE, payload:error});
        }
    }
}