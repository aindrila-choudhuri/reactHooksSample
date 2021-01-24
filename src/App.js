import './App.css';
import store from "./redux/store";
import {Provider} from "react-redux";

import HooksCakeContainer from "./components/HooksCakeContainer";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeContainer />
        <ClassCounter />
        <HookCounter /> */}
        <ClassCounterOne />
      </div>
    </Provider>
    
  );
}

export default App;
