import styled from 'styled-components';

export const Div = styled.div`
  width: 90%;
  height: 120px;
  background:
         linear-gradient( 90deg,
           rgba(0, 0, 0, 0.8), 
           rgba(0, 0, 0, 0)
         ),
         url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media(min-width: 900px) {
    width: 23%;
    height: 40vw;
    background:
         linear-gradient(
           rgba(0, 0, 0, 0), 
           rgba(0, 0, 0, 0.7)
         ),
         url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const H2 = styled.h2`
  width: 130px;
  font-weight: 500;
  font-size: 25px;
  color: white;
  margin: 40px 0 0 20px;
  @media(min-width: 900px) {
      align-self: flex-end;
      font-size: 2.5vw;
      width: 70%;
      margin: 0 0 18% 18%;
    }
`;
