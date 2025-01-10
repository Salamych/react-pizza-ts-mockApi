import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './scss/app.scss';


import Home from './pages/Home';
//import Cart from './pages/Cart';
//import FullPizza from './pages/FullPizza';
//import NotFound from './pages/NotFound';
import MainLayout from './layout/MainLayout';


const Cart = React.lazy(() => import('./pages/Cart'));
const FullPizza = React.lazy(() => import('./pages/FullPizza'));
const NotFound = React.lazy(() => import('./pages/NotFound'));


function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />}/>
        <Route path="cart" element={
          <React.Suspense fallback={<div>Cart is Loading...</div>}>
            <Cart />
          </React.Suspense>
        }/>
        <Route path="pizza/:id" element={
          <React.Suspense fallback={<div>Full pizza is Loading...</div>}>
            <FullPizza />
          </React.Suspense>
        }/>
        <Route path="*" element={
          <React.Suspense fallback={<div>Not found is Loading...</div>}>
            <NotFound />
          </React.Suspense>
        }/>
      </Route>
    </Routes>  
  )
}

export default App

