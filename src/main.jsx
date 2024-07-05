import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/root.jsx';
import ErrorPage from './components/error-page.jsx';
import CreateEvent from './components/create-event.jsx';
import EventDetails from './components/event-details.jsx';
import SignIn from './components/sign-in.jsx';
import SignUp from './components/sign-up.jsx';
import HomePage from './components/home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/create-event', element: <CreateEvent /> },
      { path: '/event-details/:id', element: <EventDetails /> },
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
