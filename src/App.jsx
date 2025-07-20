/** @format */

import { useState } from "react";
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import PokemonDetails from "./components/PokemonDetails.jsx";
import SetOffsetButton from "./components/setOffsetButton.jsx";
import "./index.css";
import"./styles/Footer.css"

import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer.jsx";

function App() {
	const [offset, setOffset] = useState(0);
	const [search, setSearch] = useState("");

	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<Header search={search} setSearch={setSearch} />
					<Card offset={offset} search={search} />
					<SetOffsetButton setOffset={setOffset} />
          <Footer/>
				</>
			),
		},
		{
			path: "*",
			element: <NotFoundPage />,
		},
		{
			path: "/details/:nameUrl",
			element: <PokemonDetails />,
		},
	]);

	return (
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>
	);
}

export default App;
