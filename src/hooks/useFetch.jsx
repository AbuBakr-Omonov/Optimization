import { useState,useEffect } from "react";
import { api } from "../api";


export const useFetch = (endpoint) => {
    const [data, setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)


    useEffect(() =>{
        setLoading(true)
        api
        .get(endpoint)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));

    },[])

    return {data,loading,error}
}