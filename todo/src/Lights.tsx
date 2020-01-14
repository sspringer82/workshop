import React from 'react';

interface State {
  canWalk: boolean;
}

interface Props {}

export default class Lights extends React.Component<Props, State> {
  state = {
    canWalk: false,
  };

  render() {
    const values = ['A', 'B', 'C'];

    console.log('Lights render');

    const handleClick = () => {
      //this.setState({ canWalk: !this.state.canWalk });

      this.setState(prevState => {
        return { ...prevState, canWalk: !prevState.canWalk };
      });
    };

    return (
      <div style={{ border: '1px solid black', marginBottom: '20px' }}>
        <div>{this.state.canWalk ? 'walk' : 'stop'}</div>
        <button onClick={handleClick}>toggle</button>
        {values.map(v => (
          <div key={v}>{v}</div>
        ))}
      </div>
    );
  }
}
