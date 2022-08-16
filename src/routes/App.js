import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductInfo from'../pages/ProductInfo'
import AppContext from '../context/AppContext';
import { useInitialState } from '../Hooks/useInitialState';
import Header from '../containers/Header';
function App() {  
  const initialState=useInitialState()
  return (
    <AppContext.Provider value={initialState} >
      <div className="App">
        <BrowserRouter >
          <Header/>
          <Routes>
          <Route exact path='/' element={<ProductInfo/>}/>
          <Route exact path='/search/:search' element={<Home/>}/>          
          <Route exact path="/info" element={<ProductInfo/>} />
          </Routes>
        </BrowserRouter>
        
      </div>
    </AppContext.Provider>
  );
}

export default App;



