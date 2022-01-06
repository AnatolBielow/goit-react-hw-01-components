import styled from "styled-components";

export const TableHead = styled.thead`
  text-transform: uppercase;
  background-color: blue;
  color: white;
  th {
    :not(:last-child) {
      border-right: 1px solid #e1e1e1;
    }
  }
`;
