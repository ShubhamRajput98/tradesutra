export const PostApi = async (URL, data, token) => {
    let responseData = "";
    const body = JSON.stringify(data);
    const header = {
        Accept: "application/json",
        "Content-Type": "application/json",
    };
    if (token) {
        header.Authorization = `Bearer ${token}`;
    }
    await fetch(URL, {
        method: "POST",
        headers: header,
        body,
    }).then((response) => {
        return response.json();
    }).then((responseJSON) => {
        responseData = responseJSON;
        return responseJSON;
    })
        .catch((err) => {
            console.log("err ", err);
        });
    return responseData;
}
