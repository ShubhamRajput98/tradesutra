const GetApi = async (URL, token) => {
    let data = "";
    const myHeaders = new Headers();

    if (token) {
        myHeaders.append("Authorization", token);
    }
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    await fetch(URL, requestOptions)
        .then((response) => {
            return response.json();
        })
        .then((responseJSON) => {
            data = responseJSON;
            return responseJSON;
        })
        .catch((err) => {
            console.log("err ", err);
        });
    return data;
};

export default GetApiCall;
