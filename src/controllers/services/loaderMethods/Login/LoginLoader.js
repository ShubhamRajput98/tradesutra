import { LOGIN } from "../../../../app/apiListing/ApiListing";
import { loginActions } from "../../../../slices/login/LoginSlice";
import { PostApi } from "../../apiCallingMethods/postApi";

export const LoginLoader = (data, navigation) => {
    return async (dispatch) => {
        const values = {
            user: {
                email: data.email,
                password: data.password
            },
            deviceInfo: {
                ipAddress: "0.0.0.0",
                deviceId: "123",
                deviceType: "web"
            }
        }

        try {
            const Response = await PostApi(LOGIN, values);
            if (Response.tokens) {
                sessionStorage.setItem("openId", 0);
                localStorage.setItem("auth", true)
                localStorage.setItem("token", Response?.tokens?.access);
                dispatch(loginActions.onLogin({ data: Response }))
                navigation("dashboard");
            } else {
                localStorage.setItem("auth", false)
                dispatch(loginActions.onError({ data: Response?.error }))
            }
        } catch (e) {
            console.error(e)
        }
    }
}