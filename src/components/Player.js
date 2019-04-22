import React, { PureComponent } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

class Player extends PureComponent {

  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
  };

  render() {
    const {
      name,
      removePlayer,
      score,
      index,
      id,
      changeScore
    } = this.props;
    console.log(name + " rendered");
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          { name }
        </span>

        <Counter
         score={score}
         index={index}
         changeScore = {changeScore} />
      </div>
    );
  }
}



export default Player;
