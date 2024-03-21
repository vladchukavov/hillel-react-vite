import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './assets/css/index.css'
import Home from './routes/Home.jsx'
import UserPosts from './routes/UserPosts.jsx'
import UserInfo from "./routes/UserPosts.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/user/:userId',
                element: <UserInfo />,
            },
            {
                path: '/UserPosts/:userId',
                element: <UserPosts />,
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
