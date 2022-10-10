import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8px;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const TransactionTable = styled.table`
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 4px;
  width: 700px;
  height: auto;
  margin-left: 40px;
`;

export const TableHead = styled.thead`
  border: 1px solid ${p => p.theme.colors.black};
  background-color: blue;
  text-align: center;
`;

export const TableBody = styled.tbody`
  border: 1px solid ${p => p.theme.colors.black};
  text-align: center;
`;

export const TableRow = styled.tr`
  border: 1px solid ${p => p.theme.colors.black};
`;
