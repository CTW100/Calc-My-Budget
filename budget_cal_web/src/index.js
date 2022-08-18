import React from 'react';
import ReactDOM from 'react-dom/client';
import AddProduct from './pages/AddProduct';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/LoginPage';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './_reducers';
import Auth from './hoc/auth';
import Welcome from './pages/Welcome';

const store = createStore(reducer); // reducer 인자로 넣어야 함

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Navigation />
					<Switch>
						{/* (SpecificComponent, option)
						// option- null, true, false
						// null => 아무나 출입이 가능한 페이지
						// true => 로그인한 유저만 출입이 가능한 페이지
						// false => 로그인한 유저는 출입 불가능한 페이지 */}
						<Route exact path='/' component={Auth(Welcome, null)} />
						<Route
							exact
							path='/home'
							component={Auth(Home, true)}
						/>
						<Route
							exact
							path='/add-product'
							component={Auth(AddProduct, true)}
						/>
						<Route
							exact
							path='/users/new'
							component={Auth(CreateAccount, false)}
						/>
						<Route
							exact
							path='/users/login'
							component={Auth(Login, false)}
						/>
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
