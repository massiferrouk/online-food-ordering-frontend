import { type } from "@testing-library/user-event/dist/type"
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "./ActionType";

{/*export const registerUser=(reqData)=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try{
        const response=await api.post('/register',reqData)
        dispatch({type:REGISTER_SUCCESS,payload:response.data})
    }catch(error){
        dispatch({type:REGISTER_FAILURE,payload:error})
    }
}*/}

export const registerUser = (reqData) => async (dispatch) => {
    dispatch({type: REGISTER_REQUEST})
    try {
        const {data} = await axios.post(`${API_URL}/auth/signup`, reqData.userData)
        if(data.jwt) localStorage.setItem("jwt", data.jwt);
        if(data.role==="ROLE_RESTAURANT_OWNER") {
            reqData.navigate("/admin/restaurant")
        }
        else {
            reqData.navigate("/")
        }
        dispatch({type: REGISTER_SUCCESS, payload: data.jwt})
    }
    catch (error) {
        console.log("error", error)
    }
}

export const loginUser = (reqData) => async (dispatch) => {
    dispatch({type: LOGIN_REQUEST})
    try {
        const {data} = await axios.post(`${API_URL}/auth/sigin`, reqData.userData)
        if(data.jwt) localStorage.setItem("jwt", data.jwt);
        if(data.role==="ROLE_RESTAURANT_OWNER") {
            reqData.navigate("/admin/restaurant")
        }
        else {
            reqData.navigate("/")
        }
        dispatch({type: LOGIN_SUCCESS, payload: data.jwt})
    }
    catch (error) {
        console.log("error", error)
    }
}