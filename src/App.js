import './App.css';
import store from "./redux/store";
import {Provider} from "react-redux";

import HooksCakeContainer from "./components/HooksCakeContainer";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import ParentComponent from "./components/ParentComponent";
import Counter from "./components/Counter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeContainer />
        <ClassCounter />
        <HookCounter /> */}
        {/* <ClassCounterOne /> */}
        {/* <ParentComponent /> */}
        <Counter />
      </div>
    </Provider>
    
  );
}

export default App;
