import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8px;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const ProfileCard = styled.div`
  padding: 10px;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 4px;
  margin: 10px 40px;
  width: 200px;
  height: auto;
`;

export const CardDescription = styled.div`
  display: flex;
  align-items: center;
  justyfy-content: center;
  flex-direction: column;
`;

export const StatsList = styled.ul`
  display: flex;
  width: auto;
  height: auto;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const StatsItem = styled.li`
  display: block;
  width: 80px;
  height: 40px;
  padding-left: auto;
  padding-right: auto;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 4px;
`;
