import React from 'react'
import {createBrowserRouter , RouterProvider } from 'react-router-dom';
// import all the components

import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Reset from './components/Reset';
import Recovery from './components/Recovery';
import PageNotFound from './components/PageNotFound';




// root routes

const router = createBrowserRouter([
    {
        path:'/',
        element:<Username></Username>
    },
    {
         path: '/register',
        element: <Register></Register>
    },
    {
        path:'/Password',
        element:<Password></Password>
    },
    {
        path:'/Reset',
        element:<Reset></Reset>
    },
    {
        path:'/*',
        element:<PageNotFound></PageNotFound>
    },
    {
        path:'/Profile',
        element:<Profile></Profile>
    },
    {
        path:'/Recovery',
        element:<Recovery></Recovery>
    },

])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
  </main>
  )
} 
