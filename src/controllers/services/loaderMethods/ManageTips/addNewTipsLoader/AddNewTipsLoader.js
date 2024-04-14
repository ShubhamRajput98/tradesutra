import { ADDNEWTIPS } from "../../../../../app/apiListing/ApiListing"
import { addNewTipsActions } from "../../../../../slices/manageTips/addManageTipsSlice/AddNewTipsSlice"
import { PostApi } from "../../../apiCallingMethods/postApi"

export const AddNewTipsLoader = (data) => {
    return async (dispatch) => {
        try {
            // dispatch(addNewTipsActions.onLoadData({ data: "hey" }))
            const Response = await PostApi(ADDNEWTIPS, data);
            console.log(Response)
        } catch (e) {
            console.error(e)
        }
    }
}
