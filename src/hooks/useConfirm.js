
export const useConfirm = (message,onConfirm, onCancel) => {
    const confirmAction = () => {
        if(window.confirm(message)){
            if(onConfirm  && typeof onConfirm !== "function"){
                return;
            }
            onConfirm();


        }else{
            if(onCancel  && typeof onCancel !== "function"){
                return;
            }
                onCancel();

        }
    }
    return confirmAction;
}