import styled from 'styled-components';

export const HeaderDiv = styled.header`
  width: 90vw;
  margin: 0 5vw;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.img`
 width: ${(props) => (props.logo ? '150px' : '25px')};
`;
