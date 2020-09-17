import React, {Component} from 'react';
 
class App extends React.Component {
	constructor() {
		super();
		this.state = { status:true};
	}
	render() {
		const displayMessage = this.state.status ? (
			<div>
                  <p><h3>The Application status is now - Completed.</h3></p>
            </div>
              ) :  (
                  <div>
                      <p><h3>The Application status is currently - Inprogress.</h3></p>
                </div>
                  ) ;
              return (
                  <div>
                      <h1> Welcome to Demo Application </h1>
                      { displayMessage }
                  </div>
              );
     }
}
export default App;