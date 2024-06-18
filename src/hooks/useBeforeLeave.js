import {useEffect} from "react";

export const useBeforeLeave = (onBefore) => {
    const handle = (event) => {
        const {clientY} = event;
        if(clientY <= 0){
            onBefore();
        }

        //console.log(event);
        //onBefore();
    }
    useEffect(() => {
        //if(onBefore && typeof onBefore !== "function")
        //{return ;}
        document.addEventListener("mouseleave",handle);
        return () => document.removeEventListener("mouseleave",handle);
    },[]);
}