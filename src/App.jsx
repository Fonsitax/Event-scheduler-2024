import React, {useState} from 'react'
import { loginUser, registerUser } from './api/auth-api';
import { createEvent} from './api/event-api';

function App() {
  // Below is to save the token
  const [token, setToken] = useState("");
  // Below is the example for auth api request
  const user = {email : "weirdtestemail@gmail.com",password : "password"};

  // register function for user to register
  const onRegister = async() => {
  const response = await registerUser(user);
  console.log(response);
}

// login function for user to get token
  const onLogin = async() => {
  const response = await loginUser(user);
  setToken(response.token);
  console.log(response);
}

const onCreateEvent = async() => {
  const event = {  
    title: "Event Title",
    description: "Some Description for the Event",
    date: "2024-07-02T19:07:19.448Z",
    location: "Schloßbezirk 10, 76131 Karlsruhe",
    latitude: 8.404746955649602,
    longitude: 49.01438194665317,
    organizerId: 1
  }; 

    const response = await createEvent(event, token);
    console.log(response);
  }

  return (
    <>
      <h1>Hello Chris and Henry!</h1>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onRegister}> Test Register Button</button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onLogin}> Test Login Button</button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onCreateEvent}> createEvent Button</button>

    </>
  )
}

export default App
