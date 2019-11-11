import styled from "styled-components";

export const Result = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  font-family: ${({ theme }) => theme.fontFamily};
  justify-content: space-between;
  padding: 5px 0;
`;

export const FlagNameAndPosition = styled.div`
  display: flex;
  align-items: center;
  width: 300px;

  img {
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 50px;
  }

  h2 {
    margin-left: 5px;
  }
`;

export const Position = styled.span`
  display: flex;
  align-items: center;
  background: ${props => (props.position == 1 ? "green" : props.theme.black)};
  border-radius: 30%;
  color: white;
  font-size: 20px;
  font-weight: 800;
  height: 30px;
  justify-content: center;
  margin-right: 15px;
  width: 30px;
`;

export const ResultRight = styled.div`
  display: grid;
  grid-gap: 4px;
  grid-template-columns: 110px 120px;

  font-size: 15px;
`;

export const LapTime = styled.span`
  background: #ddd;
  border-radius: 20px;
  padding: 2px 8px;
  color: ${props => (props.fastestLap ? "#8759F2" : "black")};
  font-weight: bold;
`;
