import React from 'react';

const Event: React.FC = () => {
  function handleClick(e: any) {
    // consoles.log(this);
  }
  return <button onClick={handleClick}>click me</button>;
};

export default Event;

class Event2 extends React.Component {
  state = {
    firstname: 'Klaus',
    lastname: 'Müller',
  };
  handleClick(e: any) {
    console.log(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ firstname: 'Lisa', lastname: 'Meier' });
    });
  }

  render() {
    return (
      <>
        Name: {this.state.firstname}
        <button onClick={(e) => this.handleClick(e)}>click me</button>
      </>
    );
  }
}
