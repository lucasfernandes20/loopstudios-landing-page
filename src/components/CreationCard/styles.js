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
`;

export const H2 = styled.h2`
width: 130px;
font-weight: 500;
font-size: 25px;
color: white;
margin: 40px 0 0 20px;
`;
