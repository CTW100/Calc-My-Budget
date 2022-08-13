import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Addpage from './pages/Addpage';
import Slide from './components/Slide';

class App extends React.Component {
	render() {
		return (
			<div>
				<Slide />
				<Addpage />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
