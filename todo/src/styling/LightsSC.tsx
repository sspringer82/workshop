import React from 'react';
import './Lights.scss';
import { Box, State, Pole, Button } from './Lights.styles';

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
        <Box>
          <State active={!this.state.canWalk} stop>
            stop
          </State>

          <State active={this.state.canWalk} walk>
            walk
          </State>
        </Box>
        <Pole />

        <Button onClick={handleClick}>toggle</Button>
        {values.map(v => (
          <div key={v}>{v}</div>
        ))}
      </div>
    );
  }
}
