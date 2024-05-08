import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./utils/appStore";

function App() {
  return (
    <div className="text-3xl">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
