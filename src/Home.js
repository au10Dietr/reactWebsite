import React from 'react';
import Files from './Files';
import Parent from './Parent';
import Calculator from './Calculator';
export default class Home extends React.Component {
	render() {
		return (
			<div>
				<Parent />
				<Calculator />
				<Files />
			</div>
		);
	}
}