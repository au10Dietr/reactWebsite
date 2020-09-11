import React from 'react';

export class Sibling extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <h1 className="text">Hey, my name is {name}!</h1>
        <h2 className="text">Don't you think {name} is the prettiest name ever?</h2>
        <h2 className="text">Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}