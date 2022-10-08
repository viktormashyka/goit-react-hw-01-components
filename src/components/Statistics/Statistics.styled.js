import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8px;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const StatBox = styled.section`
  display: block;
  border: 1px solid ${p => p.theme.colors.black};
  width: 400px;
  height: auto;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
`;

export const StatItem = styled.li`
  display: block;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  padding: 4px;
  border: 1px solid ${p => p.theme.colors.black};
  }
`;
