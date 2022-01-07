import styled from "styled-components";

function hexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsSection = styled.section`
  display: block;
  width: fit-content;
  overflow: hidden;
  border-radius: 10px;
  margin: 20px auto;
  margin-top: 50px;
  color: #2f2f2f;
  -webkit-box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
`;
export const Title = styled.h2`
  display: block;
  padding: 20px 0;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #fafafa;
`;

export const StatsList = styled.ul`
  background-color: greenyellow;
  color: white;
`;

export const StatsItem = styled.li`
  display: inline-block;
  background-color: ${hexColor};
  width: 50px;
  padding: 10px;
`;

export const Label = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 18px;
  text-align: center;
`;

export const Percentage = styled.span`
  display: block;
  margin: 10px auto 0 auto;
  font-size: 24px;
  text-align: center;
`;
