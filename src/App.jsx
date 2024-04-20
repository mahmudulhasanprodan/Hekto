import React from 'react'
import Home from './Pages/Home/Home'
import Header from './HomeComponent/Header/Header';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
         
      </Route>
    )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
