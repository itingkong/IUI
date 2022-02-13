import React from "react";
import Layout from "./components/Layout";
import Menu from "./Demo/menu";
import CardDemo from "./Demo/card";
import { rootSizeHandler } from "./utils";
import "./index.css";

export default class App extends React.Component {
	componentDidMount() {
		rootSizeHandler();
		window.addEventListener("resize", rootSizeHandler, false);
	}

	render() {
		return <Layout height={100} showMiniBtn={true} leftContent={<Menu />} rightContent={<CardDemo />} />;
	}
}
