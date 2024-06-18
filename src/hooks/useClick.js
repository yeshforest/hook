import {useEffect, useRef} from "react";

export const useClick = (onClick) => {
    const element = useRef();
    useEffect(()=> {
        if(typeof onClick !=="function"){
            return;
        }
        if(element.current) { // useClick이 mount 됐을 때 EventListener 추가
            element.current?.addEventListener("click",onClick);
        }
        return () => { // return 은 componentWillUnmount 때 호출.
            if(element.current){
                element.current?.removeEventListener("click",onClick);
            }
        }
    },[]); // dep배열이 비었으므로 update는 신경 x . dep배열을 넣지 않으면 매번 update 될 때마다 eventlistener가 추가됨.
    // 배열이 있으면 componentDidMount 때 한번만 실행됨.

    return element;
}