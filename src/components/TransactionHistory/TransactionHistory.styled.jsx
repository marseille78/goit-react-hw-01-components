import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  max-width: var(--maw);
  margin: var(--sect-margin);
  border: var(--bd);
  box-shadow: var(--bxsh);
  border-collapse: collapse;
`;
export const THead = styled.thead``;
export const Tr = styled.tr`
  &:not(:last-child) {
    td {
      border-bottom: 1px solid #ccc;
    }
  }
`;
export const Th = styled.th`
  text-align: center;
  padding: 8px;
  text-transform: uppercase;
  color: var(--color-white);
  background-color: #00BCD5;

  &:not(:last-child) {
    border-right: 1px solid var(--color-white);
  }
`;
export const TBody = styled.tbody``;
export const Td = styled.td`
  text-align: center;
  padding: 8px;

  &:not(:last-child) {
    border-right: 1px solid #ccc;
  }
`;
