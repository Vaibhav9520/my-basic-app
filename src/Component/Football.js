import React, { Component } from 'react';
import styles from'./Header.module.css'

export default class Football extends Component {
  render() {
    const { player1, player2, player3, player4 } = this.props;
    
    return (
      <div>
        <h1>List of Football Players: </h1>
        <p className={styles.fplayer1}>1- {player1.name} ({player1.country})</p>
        <p className={styles.fplayer2}>2- {player2.name} ({player2.country})</p>
        <p className={styles.fplayer3}>3- {player3.name} ({player3.country})</p>
        <p className={styles.fplayer4}>4- {player4.name} ({player4.country})</p>
      </div>
    );
  }
}
