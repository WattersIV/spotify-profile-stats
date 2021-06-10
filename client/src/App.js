import "./sass/main.scss";
import Login from "./components/Login";

function App() {
  const login = false;
  return (
    <body className="app">
      {login ? (
        <>
          <div className="main">Main Container</div>
          <div className="sidebar">Sidebar</div>
        </>
      ) : (
        <Login />
      )}
    </body>
  );
}

export default App;
