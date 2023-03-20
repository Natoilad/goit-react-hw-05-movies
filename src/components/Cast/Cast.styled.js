import styled from '@emotion/styled';
export const CastContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 50px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const CastCard = styled.div`
  width: 180px;

  border: 1px solid;
  padding: 10px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  @media (max-width: 600px) {
    zoom: 1.5;
    // scale 1.5;
    // width: 350px;
    // height: 600px;
  }
`;
export const P = styled.p`
  margin: 5px;
`;
