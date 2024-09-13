import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import IceCreamContainer from './components/IceCreamContainer';
import BurgerContainer from './components/BurgerContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <CakeContainer />
        <IceCreamContainer />
        <BurgerContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
