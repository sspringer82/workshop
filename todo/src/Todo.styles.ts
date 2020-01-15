import styled from 'styled-components';
import {
  CardContent as CardContentMUI,
  Card as CardMUI,
} from '@material-ui/core';

export const CardContent = styled(CardContentMUI)`
  display: flex;
  justify-content: space-between;
`;

export const Card = styled(CardMUI)`
  margin: 20px auto;
  width: 400px;
`;
