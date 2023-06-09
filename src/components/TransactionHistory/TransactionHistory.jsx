import PropTypes from 'prop-types';
import { Table, TBody, Td, Th, THead, Tr } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {

  const rows = items.map(({ id, type, amount, currency }) => (
    <Tr key={id}>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
  ));

  return (
    <Table>
      <THead>
      <Tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </Tr>
      </THead>

      <TBody>
        { rows }
      </TBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  }))
};
