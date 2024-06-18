import {useRef} from "react";

export const useFullScreen = (callback) => {
    const element = useRef();
    const runCb = (isFull) => {
        if(callback && typeof callback === "function"){
            callback(isFull);
        }
    }

    const triggerFull = () => {
        if(element.current) {
            element.current.requestFullscreen();
        }
        runCb(true);
    }

    const exitFull = () => {
        if(document.exitFullscreen){
            document.exitFullscreen();
        }
        runCb(false);
    }
    return {element, triggerFull ,exitFull};

}