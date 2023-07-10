import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
	return (
		<Routes>
			<Route path="/pomodoroTimer" element={<DefaultLayout />}>
				<Route path="/pomodoroTimer" element={<Home />} />
				<Route path="/pomodoroTimer/history" element={<History />} />
			</Route>
		</Routes>
	);
}
