import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './redux/userSlice.js';
import User from "./components/User";

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

const App = () => {
  
  return (
    <>
      <Provider store={store}>
        <User username="CarlosDiazGirol"></User>
      </Provider>
    </>
  );
}

export default App;
