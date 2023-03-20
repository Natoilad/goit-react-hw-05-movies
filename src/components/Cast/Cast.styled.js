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
  width: 90%;
  border: 1px solid;
  padding: 10px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  @media (min-width: 600px) {
    width: 180px;
  }
`;
export const P = styled.p`
  margin: 5px;
`;
