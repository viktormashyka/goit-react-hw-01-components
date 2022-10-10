import PropTypes from 'prop-types';
import {
  Wrapper,
  TransactionTable,
} from 'components/TransactionHistory/TransactionHistory.styled';
import { TableHead } from 'components/TransactionHistory/TransactionHistory.styled';
import { TableBody } from 'components/TransactionHistory/TransactionHistory.styled';
import { TableRow } from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Wrapper>
      <TransactionTable class="transaction-history">
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
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
