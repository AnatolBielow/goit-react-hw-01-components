import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #fafafa;
  border-radius: 10px;
  padding: 5px 20px;
  -webkit-box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Status = styled.span`
  color: ${(friend) => (friend.isOnline ? "green" : "red")};
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  margin-left: 15px;
`;

export const FriendName = styled.p`
  font-size: 20px;
  margin-left: 15px;
`;
