const path = "http://localhost:3001/api";
const events = "/events";

const postEventApi = async (request, token) => {
    try {
        const response = await fetch(`${path}${events}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(request),
    });

    if (!response.ok) {
        throw new Error("event api response not ok");
    } 

    const data = await response.json();
    return data; 
    } catch (error) {
        console.error("error in create event" , error);
    }
} 

export const createEvent = async (event, token) => {
    const response = await postEventApi(event, token);
    return response;
}