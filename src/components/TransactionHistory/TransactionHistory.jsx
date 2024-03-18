import TransactionBody from '../../transactionBody/transactionBody';
import TransactionHead from '../../transactionHead/transactionHead';

import css from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionTable}>
      <TransactionHead />
      <TransactionBody transactions={transactions} />
    </table>
  );
};

export default TransactionHistory;
