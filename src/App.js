import { Provider } from 'react-redux';

import Navbar from './components/Navbar';
import Todos from './components/Todos';
import store from './store/store.js';

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Navbar />
                <Todos />
            </div>
        </Provider>
    );
}

export default App;
