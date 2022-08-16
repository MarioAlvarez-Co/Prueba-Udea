
import {  useState,useEffect } from 'react';

import axios from 'axios'

const api =axios.create({
    baseURL:'https://api.mercadolibre.com/'
});
export const  useGetApiInfo=()=>{    
     const useSearchProducts=(search)=>{
        const [searchProducts,setSearchProducts]=useState([])          
        useEffect(()=>{
            const getSearch=async()=>{                
                try {
                    const {data}= await api.get('/sites/MCO/search',{
                       params:{
                        q:search,
                        offset:0,
                        limit:50                    
                        }                
                    })                                     
                    setSearchProducts(data.results)
                    
                } catch (error) {
                    console.error(error);
                }
            }
            getSearch()
        },[search])         
        return(searchProducts)
    }           
    const useSearchItem=({id})=>{
        console.log(id)
        const [searchItem,setSearchItem]=useState([])        
        useEffect(()=>{
            const getSearch=async()=>{
                try {
                    const {data}= await api.get(`/items/${id}`)                                     
                    setSearchItem(data)                    
                } catch (error) {
                    console.error(error);
                }
            }
            getSearch()
        },[])         
        return(searchItem)
    }                      
    return {useSearchProducts,useSearchItem}
}

 
 


 
    