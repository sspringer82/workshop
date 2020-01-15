import styled, { css } from 'styled-components';

export const Box = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  background-color: darkgrey;
  width: 100px;
  height: 50px;
  margin: 20px;
`;

const MyBox = styled(Box)`
  margin: 40px;
`;

interface Props {
  active: boolean;
}
export const State = styled.div`
  ${(props: Props) => css`
    color: ${props.active ? 'yellow' : 'grey'};
  `}
`;
