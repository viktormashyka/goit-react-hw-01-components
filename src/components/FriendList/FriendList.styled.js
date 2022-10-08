import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8px;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const FriendsList = styled.ul`
  display: block;
  max-width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: auto;
  padding: 4px;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 4px;
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;
