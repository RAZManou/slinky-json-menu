import "./App.css";
import data from "./data.json";
import Menu from "./components/Menu/Menu";

const App = () => {
    return (
        <div className="App">
            <Menu json={data} />
        </div>
    );
};

export default App;
