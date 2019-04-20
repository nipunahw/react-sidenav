
import * as React from 'react'
import styled from 'styled-components';
import { SideNav, Nav, NavContext } from 'react-sidenav'
import { MenuIcon } from './icons'
import { Basic } from './Basic'

const Flex = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  padding: 18px;
  text-align: center;
  letter-spacing: 2px;
`;
const Navigation = styled.div`
  background: #222d32;
  height: 100%;
  width: 260px;
  color: #fff;
  font-size: 14px;
`;

const Heading = styled.h3`
  padding: 0px 18px;
  font-weight: normal;
`;
const NavItemCont = styled.div<{ selected: boolean }>`
  display: flex;  
  padding: 12px 18px;
  color: ${props => (props.selected ? "#FFF" : "rgb(183, 192, 205)")};
  cursor: pointer;
  background: ${props => (props.selected ? "rgb(29, 37, 49)" : "inherit")};
  transition: all 0.5ms ease-in;
  &:hover {
    color: #fff !important;
  }
`;

const NavItem = props => {
  const context = React.useContext(NavContext);

  return (
    <NavItemCont selected={context.selected}>{props.children}</NavItemCont>
  )
};

const Content = styled.div`
  width: 100%;
  height: 100%;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Views = {
  basic: Basic
};

export const App = () => {

  const [ activeView, setActiveView ] = React.useState<string>('')
  
  const onSelection = selection => {
    setActiveView(selection);
  };
  
  React.useEffect(() => {
    // get the hash shit
  }, [])
  const ViewComponent = Views[activeView] || null;

  return (
    <Flex>
      <Navigation>
        <Title>React SideNav</Title>
        <SideNav onSelection={onSelection}>
          <Nav id="basic">            
            <NavItem>             
              <div style={{padding: '0px 4px', color: "#42a5f5" }}><Center><MenuIcon size={10}/></Center></div>
              <span>Usage and Concepts</span>
            </NavItem>
          </Nav>
          <Heading>Examples</Heading>
          <Nav id="customchildren1">
            <NavItem>Custom Items 1</NavItem>
          </Nav>
          <Nav id="customchildren2">
            <NavItem>Custom Items 2</NavItem>
          </Nav>
        </SideNav>
      </Navigation>
      <Content>      
        {ViewComponent ? <ViewComponent /> : null}      
      </Content>
    </Flex>
  )
}