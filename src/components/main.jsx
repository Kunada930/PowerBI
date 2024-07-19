import React, { useState, useRef, useEffect } from "react";
import videoBG from "../assets/184808-874264370_small.mp4";
import daLogo from "../assets/DA_Logo.png";
import bpLogo from "../assets/Bagong Pilipinas Logo.png";
import InteractiveMenu from "./InteractiveMenu";
import "./Main.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Main = () => {
	const [showMenu, setShowMenu] = useState(false);
	const videoRef = useRef(null);

	useEffect(() => {
		const handleVideoStart = () => {
			if (videoRef.current) {
				videoRef.current.currentTime = 2;
			}
		};
		const videoElement = videoRef.current;
		if (videoElement) {
			videoElement.addEventListener("loadeddata", handleVideoStart);
		}
		return () => {
			if (videoElement) {
				videoElement.removeEventListener("loadeddata", handleVideoStart);
			}
		};
	}, []);

	return (
		<div className="main">
			<div className="overlay"></div>
			<video ref={videoRef} src={videoBG} autoPlay loop muted />
			<div className="content">
				<div className="tataks">
					<img src={daLogo} alt="D.A Logo" className="tatak" />
					<img src={bpLogo} alt="Bagong Pilipinas Logo" className="tatak" />
				</div>
				<h1>Department of Agriculture</h1>
				<p>Regional Field Office 02</p>
			</div>
			<div className={`powerbi-container ${showMenu ? "menu-open" : ""}`}>
				{showMenu ? (
					<InteractiveMenu onClose={() => setShowMenu(false)} />
				) : (
					<button className="cta-button" onClick={() => setShowMenu(true)}>
						Power
						<br />
						BI
					</button>
				)}
			</div>
		</div>
	);
};

export default Main;
