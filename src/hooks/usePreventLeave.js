export const usePreventLeave = () => {
    const listener = event => {
        event.preventDefault();
        event.returnValue = "";
    }
    const eventPrevent = () => window.addEventListener("beforeunload",listener );
    const disablePrevent = () => window.removeEventListener("beforeunload",listener);
    return {eventPrevent, disablePrevent};
}