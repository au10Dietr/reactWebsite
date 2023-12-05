import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Parent from './Parent';
import Calculator from './Calculator';
import Files from './Files';
import Navbar from './Navbar';
import Home from './Home';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/Calc" element={<Calculator />} />
				<Route path="/Files" element={<Files />} />
				<Route path="/Parent" element={<Parent />} />
			</Routes>
		</Router>

	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
