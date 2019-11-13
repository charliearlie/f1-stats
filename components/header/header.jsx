import Link from "next/link";
import { SubheaderNavigationContent } from "../../utils/navigation-content";

import {
  HeaderContent,
  HeaderWrapper,
  List,
  ListItem,
  Nav,
  NavItem,
  StyledHeader,
  SubHeader,
  Title,
  TitleWrapper
} from "./styles/header";

function Header(props) {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <HeaderContent>
          <TitleWrapper>
            <Link href="/">
              <Title>F1 Stats</Title>
            </Link>
          </TitleWrapper>
          <Nav>
            <Link href="/about">
              <NavItem>Stats</NavItem>
            </Link>
            <NavItem>Races</NavItem>
            <Link href="/qualifying">
              <NavItem>Qualifying</NavItem>
            </Link>
          </Nav>
        </HeaderContent>
      </StyledHeader>
      <SubHeader>
        <HeaderContent>
          <List>
            {SubheaderNavigationContent.map(item => (
              <ListItem>{item.name}</ListItem>
            ))}
          </List>
        </HeaderContent>
      </SubHeader>
    </HeaderWrapper>
  );
}

export default Header;
