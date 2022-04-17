import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import TermsAndConditions from "./components/TermsAndCondition/TermsAndConditions";

import { GlobalStyle } from "./globalStyles";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<MainPage />} />
          </Route>
          <Route path="/TermsAndConditions" element={<TermsAndConditions/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
