import React, { useState, useRef } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const player = useRef(null);

	const data = [
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3"
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3"
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3"
		}
	];

	const [src, setSrc] = useState("");
	const [playing, setPlaying] = useState("");

	const handleSongClick = index => {
		let song = `https://assets.breatheco.de/apis/sound/${data[index].url}`;
		setSrc(song);
		handlePlayClick();
	};

	const handlePauseClick = () => {
		player.current.pause();
		setPlaying(false);
	};

	const handlePlayClick = () => {
		if (src !== "") {
			player.current.play();
			setPlaying(true);
		} else {
			setTimeout(() => {
				player.current.play();
				setPlaying(true);
			}, 100);
		}
	};

	return (
		<div className="player text-center mt-5">
			<audio ref={player} src={src} />
			<ul>
				{data.map((item, index) => {
					return (
						<li key={index} onClick={() => handleSongClick(index)}>
							{item.name}
						</li>
					);
				})}
			</ul>
			<div className="nav">
				<i className="fas fa-caret-square-left mr-3" />
				{playing ? (
					<i className="fas fa-pause" onClick={handlePauseClick} />
				) : (
					<i className="fas fa-play" onClick={handlePlayClick} />
				)}
				<i className="fas fa-caret-square-right ml-3" />
			</div>
		</div>
	);
}
