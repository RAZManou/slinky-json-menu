import "./App.css";
import data from "./data.json";
import Menu from "./components/Menu/Menu";

const App = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                height: "calc(100vh)",
                flexDirection: "column",
                paddingTop: 56,
            }}
        >
            <img alt="slinky" src="./slinky.svg" style={{ height: 56 }} />
            <h1
                style={{
                    fontSize: 28,
                    color: "#222",
                    fontWeight: "normal",
                }}
            >
                slinky clone
            </h1>
            <p
                style={{
                    fontSize: 18,
                    color: "#808080",
                    marginTop: 14,
                    marginBottom: 28,
                    fontWeight: "normal",
                }}
            >
                rather sweet menus
            </p>
            <h2
                style={{
                    fontSize: 21,
                    color: "#4cd964",
                    marginBottom: 40,
                    fontWeight: "normal",
                }}
            >
                demo
            </h2>
            <Menu json={data} />
        </div>
    );
};

export default App;
