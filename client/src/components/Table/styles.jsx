import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 90%;
  background: var(--containers-bg);
  padding: 5rem;
  border-radius: 1rem;
  box-shadow: 0rem 0rem 2rem 0.1rem #dddddd;
  position: relative;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
export const Thead = styled.thead`

`;
export const Th = styled.th`
  font-size: clamp(1.4rem, 1.6rem, 2.2rem);
  color: var(--label);
`;
export const Tr = styled.tr`
  :nth-child(odd) {
    background-color: var(--bg-default);
  }
`;

export const Td = styled.td`
  padding: 1rem;
  font-size: clamp(1rem, 1.2rem, 1.8rem);
  text-align: center;
`;

