import { Provider } from 'react-redux';

import store from '../store';

import "../styles/styles.css";

import Header from "./Header";
import Squares from "./Squares";

function App() {
  return (
   <Provider store={store}>
     <Header />
     <Squares />
   </Provider>
  );
}

export default App;
