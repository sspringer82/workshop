import React from 'react';
import './Lights.css';
import classNames from 'classnames';

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

    const styles = { border: '1px solid black', marginBottom: '20px' };

    return (
      <div style={styles} className="Lights">
        <div className="box">
          <div className={classNames('state', { active: !this.state.canWalk })}>
            stop
          </div>
          <div
            className={classNames({
              state: true,
              active: this.state.canWalk,
            })}
          >
            walk
          </div>
        </div>

        <button onClick={handleClick}>toggle</button>
        {values.map(v => (
          <div key={v}>{v}</div>
        ))}
      </div>
    );
  }
}
