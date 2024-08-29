import React from "react";

//include images into your bundle
import { TrafficLight } from "./trafficLight";
import "/workspaces/Dfacundorod-Trafic-Light/src/styles/index.css";
//create your first component
const Home = () => {
	return (
		<>
			<div className={`blackBox`}></div>
			<TrafficLight/>
		</>
	);
};

export default Home;
