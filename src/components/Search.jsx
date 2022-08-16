import React,{ useState,useContext } from 'react'
import {  useNavigate } from "react-router-dom";
import AppContext from '../context/AppContext';

const Search = () => {   
  const navigate = useNavigate()   
  const {setSearch}= useContext(AppContext);
    const [keyword,setKeyword]=useState('')     
    const handleSubmit=(event)=>{
      setSearch(keyword)
      navigate(`/search/${keyword}`)         
      event.preventDefault()        
    }    
    const handleChange=(event)=>{
      setKeyword(event.target.value)           
    }               
  return (
   <form onSubmit={handleSubmit} >
        <input onChange={handleChange} value={keyword}type="text" placeholder='Encuentra lo que buscas'/>
        <input onClick={handleSubmit} type="button"/>
   </form>
  )
}

export default Search