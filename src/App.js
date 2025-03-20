import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
