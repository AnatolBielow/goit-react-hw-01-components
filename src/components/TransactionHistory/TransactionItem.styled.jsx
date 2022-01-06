import styled from "styled-components";

export const TableItem = styled.tr`
  text-transform: capitalize;
  color: #2f2f2f;
  text-align: center;
  :nth-child(even) {
    background-color: #e1e1e1;
  }
  :not(:last-child) {
    border-bottom: 1px solid #d5d5d5;
  }
  td {
    :not(:last-child) {
      border-right: 1px solid #d5d5d5;
    }
  }
`;
