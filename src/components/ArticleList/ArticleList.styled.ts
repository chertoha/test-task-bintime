import Table from "@mui/joy/Table";
import styled from "@emotion/styled";

export const TableStyled = styled(Table)`
  min-width: 500px;
  font-size: 11px;

  & th {
    background-color: #ecf0f6;
    font-weight: 500;
    vertical-align: middle !important;
  }

  & td {
    border: 1px solid rgba(53, 61, 106, 0.08);
  }

  & th:nth-of-type(5),
  & td:nth-of-type(5),
  & th:nth-of-type(6),
  & td:nth-of-type(6) {
    text-align: center;
  }

  @media screen and (max-width: 899.98px) {
    & th:nth-of-type(4),
    & td:nth-of-type(4) {
      display: none;
    }
  }
`;

export const ImageStyled = styled("img")`
  display: block;
  width: 100%;
  object-fit: contain;
`;
