import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import AddProduct from './pages/AddProduct';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Navigation />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/add-product' element={<AddProduct />} />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
