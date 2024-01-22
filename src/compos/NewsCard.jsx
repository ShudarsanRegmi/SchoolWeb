function NewsCard({dataObject}) {
	console.log("received data object..");
	return(
		<>
			<div className="outer">
				<img src="" alt=""/>
				<b>{dataObject.title}</b>
				<span>{dataObject.loadLine}</span>
			</div>	
		</>
	);
}


export default NewsCard;
