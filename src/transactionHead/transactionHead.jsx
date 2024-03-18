import css from './transactionHead.module.css';

const TransactionHead = () => {
  return (
    <thead>
      <tr className={css.headers}>
        <th className={css.headersItem}>Type</th>
        <th className={css.headersItem}>Amount</th>
        <th className={css.headersItem}>Currency</th>
      </tr>
    </thead>
  );
};

export default TransactionHead;
