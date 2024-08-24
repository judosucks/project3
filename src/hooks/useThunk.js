import { useState,useCallback } from "react";
import { useDispatch } from "react-redux";
export function useThunk(thunk){ // custom hook
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const dispatch = useDispatch();

    const runThunk =useCallback((arg)=>{ //use usecallback to prevent re-redering
        setIsLoading(true)
        dispatch(thunk(arg))
        .unwrap() //gets a new promise back
        .catch(err=>setError(err))
        .finally(()=> setIsLoading(false))
    },[dispatch,thunk])
    return [runThunk,isLoading,error]
}