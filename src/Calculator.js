import React, {Component} from 'react';
import ResultComponent from './ResultComponent';
import KeyPadComponent from "./KeyPadComponent";

export default class Calculator extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }
    
    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };
	
    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body cal row">
					<div className="col-sm-2">
					</div>
					<div className="col-sm-8">
						<h1>Simple Calculator</h1>
						<div className="cal row">
							<ResultComponent result={this.state.result}/>
						</div>
						<div className="cal row">
							<KeyPadComponent onClick={this.onClick}/>
						</div>
					</div>
					<div className="col-sm-2">
					</div>
                </div>
            </div>
        );
    }
}
