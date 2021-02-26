import Dashboard from "./components/Dashboard/Dashboard";
import { StoreProvider, createStore } from "easy-peasy";

import model from "./store/model";

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <Dashboard />
    </StoreProvider>
  );
}

export default App;
