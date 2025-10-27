import { create  } from "zustand";

 export const useCount=create((set)=>(
    {
        data:0,
        tom:()=>(set((state)=>({data:state.data+1}))),
        gad:()=>(set((state)=>({data:state.data-1})))

    }
))

export const useData=create((set)=>(
    {
        value:[],
        cart:[],

        FetchData:async()=>{
            const dap=await fetch("https://fakestoreapi.com/products")
            const dap2=await dap.json()
            set({value:dap2})

        }

        // addToCart:(product)=>set((state)=>({cart:[...state.cart,product]}))
    }

))

