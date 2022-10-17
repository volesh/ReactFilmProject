import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {setupStore} from "./redux";
import {BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setupStore()

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

