import { useState } from "react";
import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import IndexPage from "./pages/IndexPage";

function App() {
	return (
		<Routes>
			<Route index element={<IndexPage />} />
			<Route path="/login" element={<LoginPage />} />
		</Routes>
	);
}

export default App;
