const path = "http://localhost:3001/api";
const registerApi ="/users";
const loginApi = "/auth/login";

const callAuthApi = async (request, api) => {
    try {
        const response = await fetch(`${path}${api}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
    });

    if (response.status === 409) {
        throw new Error("User already exists");
    } 
    if (response.status === 403) {
        throw new Error("Invalid email or password");
    } 
    if (!response.ok) {
        throw new Error("Request not ok");
    } 
    const data = await response.json();
    return data; 
    } catch (error) {
        console.error("error in api" + api, error);
    }
} 

export const registerUser = async (request) => {
    const response = await callAuthApi(request, registerApi);
    return response;
}    

export const loginUser = async (request) => {
    const response = await callAuthApi(request, loginApi);
    return response;
}    