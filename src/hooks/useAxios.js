
import defaultAxios from 'axios';
import {useEffect, useState} from "react";

const useAxios = (opts, axionsInstance = defaultAxios) => {
    const [state,setState] = useState({
        loading:true,
        error:null,
        data:null
    });

    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading: true,
        });
        setTrigger(Date.now());
    }
    useEffect(() => {
    axionsInstance(opts)
        .then((data) => {
        setState({
            ...state,
            loading:false,
            data : data,
        });
    }).catch((error) => {
        setState({...state,loading:false,error : error})
    })
    }, [trigger]);
    if(!opts.url){
        return;
    }

    return {...state, refetch};

}
export default useAxios;