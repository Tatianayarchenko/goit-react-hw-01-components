import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  width: 600px;
  box-shadow: 1px 1px 3px #b19f9f;
  border-radius: 5px;

`;

export const TableHead = styled.thead`
  margin: 0 auto;
  background-color: #77e6e9;
`;

export const TableRow = styled.tr`
  :nth-child(even) {
    background-color: #efefef;
  }
`;

export const TableHeader = styled.th`
  padding: 5px;
`;

export const TableBody = styled.tbody`
  text-align: center;
`;

export const TableData = styled.td``;
