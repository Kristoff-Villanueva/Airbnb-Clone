import React, { useState } from "react";
import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import IndexPage from "./pages/IndexPage";
import Layout from "./Layout";
import axios from "axios";
import RegisterPage from "./pages/RegisterPage";

axios.defaults.baseURL = "http://localhost:4000/";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<IndexPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Route>
		</Routes>
	);
}

export default App;
