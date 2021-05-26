// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
import { BrowserRouter, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Album from "./components/MainPage";
import CountryResult from "./components/CountryResult";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/">
          <Album></Album>{" "}
        </Route>
        <Route exact path="/:countryName">
          <CountryResult></CountryResult>
        </Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
