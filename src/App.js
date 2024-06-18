import './App.css';
import useAxios from "./hooks/useAxios";


    function App() {
        const {loading,data,error,refetch} = useAxios({url : "https://yts.mx/api/v2/list_movies.json"});
    return (
        <div className="App" style={{height: '1000vh'}}>
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading" }</h2>
        <button onClick={refetch}>Refetch</button>
        </div>
    );
    }

export default App;
