
import styles from'./Header.module.css'
function Cricket(props) {
    const { player1, player2, player3, player4 } = props;
    
    return (
      <div>
        <h1>List of Cricket Players: </h1>
        <p className={styles.player1}>1- {player1.name} ({player1.country})</p>
        <p className={styles.player2}>2- {player2.name} ({player2.country})</p>
        <p className={styles.player3}>3- {player3.name} ({player3.country})</p>
        <p className={styles.player4}>4- {player4.name} ({player4.country})</p>
      </div>
    );
  } 
  
  export default Cricket;
  