import css from './transactionBody.module.css';

const TransactionBody = ({ transactions }) => {
  return (
    <tbody className={css.tbody}>
      {transactions.map((transaction, i) => {
        const rowType = i % 2 === 0 ? css.tableRowEven : css.tableRowOdd;

        return (
          <tr key={transaction.id} className={`${css.tbodyList} ${rowType}`}>
            <td className={css.tbodyItem}>{transaction.type}</td>
            <td className={css.tbodyItem}>{transaction.amount}</td>
            <td className={css.tbodyItem}>{transaction.currency}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TransactionBody;
