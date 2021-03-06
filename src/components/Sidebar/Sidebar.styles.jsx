import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const SidebarContainer = styled.div`
  position: fixed;
  z-index: 100;
  width: 350px;
  height: 100%;
  background: #ffc500;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (max-widht: 400px) {
    width: 100%;
  }
`;

const CloseIcon = styled(FaTimes)`
  color: #000;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #e31837;
  }
`;

const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const SidebarRoute = styled(Link)`
  background: #e31387;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #fff;
    color: #010606;
  }
`;

export {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
};
