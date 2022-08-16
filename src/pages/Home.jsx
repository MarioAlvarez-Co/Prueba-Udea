import React ,{useState,useContext}from 'react'
import { useParams } from 'react-router-dom';
import ProductList from '../containers/ProductList'
import AppContext from '../context/AppContext';
import { useGetApiInfo } from '../Hooks/useGetApiInfo'


const Home = () => {
   const {state,setSearch,addToCart}=useContext(AppContext);
    const {useSearchProducts,useSearchItem}=useGetApiInfo();
   

  return (
        <div >
            Home

            <ProductList/> 
        </div>
    )
}

export default Home