import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin: 0 auto;
  width: 300px;
  background-color: rgb(245, 246, 246);
`;

export const Description = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
`;

export const Name = styled.p`
  font-size: 30px;
`;

export const Tag = styled.p`
  font-size: 20px;
  color: gray;
`;

export const Location = styled.p`
  font-size: 20px;
  color: gray;
`;

export const UserStatsList = styled.ul`
  font-size: 20px;
  color: gray;
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const UserStats = styled.li`
  font-size: 20px;
  color: gray;
  display: grid;
  background: rgb(233, 224, 224);
  width: 100%;
  justify-content: center;
  text-align: center;
  padding: 10px;

  :not(:last-child) {
    border-right: 1px solid rgb(245, 246, 246);
  }
`;

export const Label = styled.span`
  font-size: 15px;

  /* color: gray; */
`;

export const Quantity = styled.span`
  /* font-size: 20px; */
  color: #010101;
`;
