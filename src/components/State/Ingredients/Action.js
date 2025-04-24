import axios from "axios"
import {
    CREATE_INGREDIENT_CATEGORY_FAILURE,
    CREATE_INGREDIENT_CATEGORY_SUCCESS,
    CREATE_INGREDIENT_SUCCESS,
    GET_INGREDIENT_CATEGORY_FAILURE,
    GET_INGREDIENT_CATEGORY_SUCCESS,
    GET_INGREDIENTS,
    UPDATE_STOCK,
} from 'ActionType.js'

import { API_URL, api } from "../../config/api"

export const getIngredientsOfRestaurant = ({ id, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.get(
                `/api/admin/ingredients/restaurant/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            )
            console.log("get all ingredients ", response.data)
            dispatch({
                type: GET_INGREDIENTS,
                payload: response.data,
            })
        } catch (error) {
            console.log("error ", error)
        }
    }
}

export const createIngredient = ({ data, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.post(`/api/admin/ingredients`, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
            console.log("create ingredient ", response.data)
            dispatch({
                type: CREATE_INGREDIENT_SUCCESS,
                payload: response.data,
            })
        } catch (error) {
            console.log("error ", error)
        }
    }
}