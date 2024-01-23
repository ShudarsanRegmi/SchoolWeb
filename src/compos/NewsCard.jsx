function NewsCard({dataObject}) {
	console.log("received data object..");
	console.log(dataObject.title);
	return(
		<>
			<div className="outer bg-green-500 m-2 mb-4 flex flex-col border-2 border-red-500 max-w-80 relative pb-3 rounded-lg">
				<img src={dataObject.image} alt=""/>
				<div className="belowCon p-2 flex flex-col">
					<b className="truncate">{dataObject.title}</b>
					<span className="truncate overflow-hidden">{dataObject.leadLine}</span>
				</div>
				<a href="" className="bg-red-700 inline-block absolute bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%] rounded-full text-white py-1 px-3 ">Read More</a>
			</div>	
		</>
	);
}


export default NewsCard;
