import styled from "styled-components";

export const Chevron = styled.span`
  font-size: 32px;
  font-weight: normal;
  color: red;
  margin-left: 5px;
  margin-top: -5px;
`;

export const Circuit = styled.p`
  margin: 0;
`;

export const Country = styled.h2`
  display: flex;
  align-items: center;
  margin: 0;

  a {
    color: black;
    text-decoration: none;
  }
`;

export const Days = styled.span`
  font-size: 24px;
`;

export const FastestLap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FastestLapLabel = styled.p`
  font-weight: bold;
`;

export const Flag = styled.div`
  display: flex;
  font-size: 22px;
  justify-content: flex-end;
  height: 25px;
  align-items: center;
  height: 100%;

  img {
    border: 1px solid #000;
    border-radius: 4px;
    max-width: 50px;
    object-fit: contain;
  }
`;
export const Main = styled.main`
  margin-top: 80px;
`;

export const Month = styled.span`
  background: black;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 0 3px;
  text-transform: uppercase;
  width: auto;
`;

export const RaceDateAndFlag = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2px;
`;

export const ResultTop = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: 8px;
  padding-bottom: 15px;
`;

export const ResultInfo = styled.div`
  padding: 0 10px;
`;

export const Time = styled.p`
  border-radius: 4px;
  background-color: black;
  color: white;
  font-weight: bold;
  padding: 0 5px;
`;
