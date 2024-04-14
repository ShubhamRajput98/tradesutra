import { PRICEAUTOMIZATION } from "../../../../../app/apiListing/ApiListing"
import { addPriceAutomationActions } from "../../../../../slices/marketManagement/addPriceAutomation/AddPriceAutomationSlice"
import { PostApi } from "../../../apiCallingMethods/postApi"

export const AddPriceAutomationLoader = (data, token) => {
    return async (dispatch) => {
        console.log(data)
        const values = {
            stockName: data.stockName,
            referenceTarget: Number(data.referenceTarget),
            referenceSL: Number(data.referenceSL),
            targetOne: Number(data.targetOne),
            targetTwo: Number(data.targetTwo),
            targetThree: Number(data.targetThree),
            targetFour: Number(data.targetFour),
            targetFive: Number(data.targetFive),
            targetSix: Number(data.targetSix),
            targetSeven: Number(data.targetSeven),
            slOne: Number(data.slOne),
            slTwo: Number(data.slTwo),
            slThree: Number(data.slThree),
            slFour: Number(data.slFour),
            slFive: Number(data.slFive),
            slSix: Number(data.slSix),
            slSeven: Number(data.slSeven),
            status: data.status
        }
        try {
            const Response = await PostApi(PRICEAUTOMIZATION, values, token);
            if (Response) {
                dispatch(addPriceAutomationActions.onLoadData({
                    data: Response.priceAutomization
                }))
            }
        } catch (e) {
            console.error(e)
        }
    }
}
