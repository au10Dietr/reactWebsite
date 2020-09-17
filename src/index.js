import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Parent from './Parent';
import Calculator from './Calculator';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
	<div class="topnav">
		<a href="http://javaecommerceweb.us-east-2.elasticbeanstalk.com/">Home</a>
		<a href="http://javaecommerceweb.us-east-2.elasticbeanstalk.com/products">Products</a>
		<a href="http://reacts3testaws.s3-website.us-east-2.amazonaws.com/">React</a>
		<a href="http://javaecommerceweb.us-east-2.elasticbeanstalk.com/weather">Async Weather</a>
	</div>
    <Parent />
	<Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
