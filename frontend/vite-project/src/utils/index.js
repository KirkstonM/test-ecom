export const apiCall = async ({ dispatch, actionTypes, apiReq, onComplete }) => {
    const [REQUEST, SUCCESS, FAILURE ] = actionTypes;
    dispatch({ type : REQUEST });
    try {
        const response = await apiReq();
        const data = await response.json();
        dispatch({ type : SUCCESS, payload : data })
        if (onComplete) {
            onComplete(data);
        }
    } catch (error) {
        dispatch({ type : FAILURE, error: error.message })
        if (onComplete) {
            onComplete({ error: error.message });
        }
    }
}