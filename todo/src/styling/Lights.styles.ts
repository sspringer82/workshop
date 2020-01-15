import styled, { css } from 'styled-components';

export const Box = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  background-color: darkgrey;
  width: 100px;
  height: 50px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface Props {
  active: boolean;
  stop?: boolean;
  walk?: boolean;
}
export const State = styled.div`
  ${(props: Props) => css`
    color: ${props.active ? (props.stop ? 'red' : 'limegreen') : 'grey'};
  `}
`;

export const Pole = styled.div`
  height: 100px;
  width: 20px;
  margin-left: 60px;
  margin-top: -20px;
  background-color: black;
`;

export const Button = styled.button`
  margin-left: 45px;
  &:hover {
    background-color: hotpink;
    color: yellow;
  }
`;
