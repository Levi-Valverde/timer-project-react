import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";

import logoTimer from "../../assets/logo-timer.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoTimer} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer />
        </NavLink>

        <NavLink to="/history" title="Histórico">
          <Scroll />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
