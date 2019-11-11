import styled from "styled-components";

export const DriverAvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  @media (min-width: ${({ theme }) => theme.mobileWidth}) {
    grid-template-columns: 1fr 2fr;
    justify-content: flex-start;
  }
`;
export const DriverAvatar = styled.img`
  border-radius: 50%;
  height: 250px;
  width: 250px;
  object-fit: cover;
`;
export const DriverInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.mobileWidth}) {
    flex-direction: row;
  }
`;

export const DriverData = styled.div`
  padding: 0 20px;
`;

export const DriverItem = styled.div`
  display: grid;
  font-size: 16px;
  font-weight: 700;
  grid-template-columns: 125px 1fr;
  max-width: 500px;

  span:first-of-type {
    margin-right: 15px;
    text-align: right;
  }
`;

export const DriverName = styled.h1`
  text-align: center;
  @media (min-width: ${({ theme }) => theme.mobileWidth}) {
    text-align: left;
  }
`;
