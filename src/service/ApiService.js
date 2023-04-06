import { API_BASE_URL } from "../app-config";
const ACCESS_TOKEN = "ACCESS_TOKEN"

export function call(api, method, request) {
    let headers = new Headers({
        "Content-type": "application/json",
    });
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if (accessToken) {
        headers.set("Authorization", "Bearer" + accessToken);
    }

    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
    }
if (request) {
    options.body = JSON.stringify(request);
}
return fetch(options.url, options)
    .then((response) =>
        response.json().then((json) => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    )
    .catch((error) => {
        console.log("Oops!");
        console.log(error.status);
        console.log("Oops!");
        if (error.status === "403") {
            window.location.href = "/login";
        }
        return Promise.reject(error);
    });
}