import styled from "styled-components";

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  max-width: 1200px;
  padding: 0 15px;
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.19);
  height: 120px;
  justify-content: space-between;
  top: 0;
  width: 100%;
  z-index: 5;
`;
export const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  max-width: 1200px;
  padding: 0;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListItem = styled.li`
  color: white;
  font-weight: 500;
  font-size: 18px;
  margin-right: 25px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.a`
  color: black;
  cursor: pointer;
  margin-right: 10px;
  text-decoration: none;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  margin: auto;
  max-width: 1200px;
  width: 100%;
`;

export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  background: #e10600;
  height: 65px;
  justify-content: center;
`;

export const TitleWrapper = styled.h2`
  margin: 0;
`;

export const Title = styled.a`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
`;
