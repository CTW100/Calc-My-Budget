import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddProduct from './pages/AddProduct';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/LoginPage';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './_reducers/index';

const store = createStore(reducer); // reducer 인자로 넣어야 함

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Navigation />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/add-product' element={<AddProduct />} />
						<Route path='/users/new' element={<CreateAccount />} />
						<Route path='/users/login' element={<Login />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
