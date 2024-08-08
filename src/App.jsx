import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import Home from './Components/Home/Home.jsx'
import About from'./Components/About/About.jsx'
import Layout from './Components/Layout/Layout.jsx'
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import Conatct from './Components/Conatct/Conatct.jsx'


function App() {
  const myRouter = createBrowserRouter([ 
    {path: "/", element: <Layout/>, children :[
      {index : true , element: <Home/>},
      {path: "/about" , element: <About/>},
      {path: "/portfolio" , element: <Portfolio/>},
      {path: "/conatct" , element: <Conatct/>},
      {path: "*", element : "Error 404"}
    ]},
    
  ]);
  return (
    <>
    <RouterProvider router={myRouter} />
    </>
  );
}

export default App
