import React from 'react';
import './index.css';
import 'antd/dist/antd.css';
import Main from './Main';
import store from './store';
import { Provider } from 'react-redux';


const App = () => (
    <Provider store={store}>
        <Main />
    </Provider>
);

export default App;