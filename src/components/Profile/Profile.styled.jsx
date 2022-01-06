import styled from "styled-components";

export const Card = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 10px;
  width: 300px;
  margin: 0 auto;
  -webkit-box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
`;
export const Description = styled.div`
  padding: 50px;
  background-color: #fafafa;
  text-align: center;
`;

export const Avatar = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  border: 1px solid #e1e1e1;
  border-radius: 50%;
  margin: 0 auto;
`;

export const Name = styled.p`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #2f2f2f;
`;

export const Tag = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: gray;
`;

export const Location = styled.p`
  margin-top: 20px;
  font-size: 20px;
  color: gray;
`;

export const Stats = styled.ul`
  background-color: #f0f0f0;
  color: gray;

  li {
    display: inline-block;
    padding: 20px 0;
    width: calc(100% / 3 - 3px);

    :not(:first-child) {
      border-left: 1px solid #e1e1e1;
    }
  }
`;
export const Label = styled.span`
  display: block;
  text-align: center;
  padding: 5px 0;
`;
export const Quantity = styled.span`
  display: block;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding: 5px 0;
  color: #2f2f2f;
`;
