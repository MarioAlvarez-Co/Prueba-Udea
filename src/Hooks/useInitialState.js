import {useState} from 'react';

const initialState={
    cart:[],
    toggle:false,
    search:''
}

    
 export const useInitialState=()=>{    
    const [state,setState]=useState(initialState)    
    const setSearch=(search)=>{
        setState({
            ...state,
            search:search
        })
    }
    const changeToggle=()=>{
        setState({
            ...state,
            toggle:!state.toggle
        })
    }
    const addToCart=(payload)=>{
        setState({
            ...state,
            cart:[...state.cart,payload]
        })
    }
    const removeFromCart=(payload)=>{
        setState({
            ...state,
            cart:state.cart.filter(items=>items.id!==payload.id)
        });
    }
    return{
        state,
        addToCart,
        removeFromCart,
        changeToggle, 
        setSearch       
    }
}