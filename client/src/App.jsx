import { useState } from "react";
import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import IndexPage from "./pages/IndexPage";
import Layout from "./Layout";
import Register from "./pages/RegisterPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<IndexPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<Register />} />
			</Route>
		</Routes>
	);
}

export default App;
