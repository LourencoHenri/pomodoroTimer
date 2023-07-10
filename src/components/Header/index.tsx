import { HeaderContainer } from "./styles";

import logo from "../../assets/logo.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
	return (
		<HeaderContainer>
			<img src={logo} />
			<nav>
				<NavLink to="/pomodoroTimer">
					<Timer size={24} />
				</NavLink>
				<NavLink to="/pomodoroTimer/history">
					<Scroll size={24} />
				</NavLink>
			</nav>
		</HeaderContainer>
	);
}
