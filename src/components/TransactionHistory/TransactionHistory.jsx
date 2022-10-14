import PropTypes from 'prop-types';
import {
  Wrapper,
  TransactionTable,
  TableHead,
  TableBody,
  TableRow,
} from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Wrapper>
      <TransactionTable className="transaction-history">
        <TableHead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </TableHead>

        {items.map(item => (
          <TableBody key={item.id}>
            <TableRow>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </TableRow>
          </TableBody>
        ))}
      </TransactionTable>
    </Wrapper>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
