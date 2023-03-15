import { Provider } from "react-redux";

// Custom import
import { store } from "./app/redux/store";
import AppNavigation from "./app/navigation/appNavigation";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
