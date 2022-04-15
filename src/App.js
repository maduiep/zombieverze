import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./globalStyles";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <MainPage />
      </Router>
    </div>
  );
}

export default App;
