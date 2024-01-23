function Focuscard({dataObject}) {
	console.log("hello hello hello");
	console.log(dataObject);
	return(
		<>
			<div className="outer bg-orange-500 m-2 mb-4 flex flex-col border-2 border-red-500 max-w-80 relative pb-3 rounded-bl-[40px] rounded-tr-[40px]">
				<img className="rounded-tr-[40px]" src={dataObject.image} alt=""/>
				<div className="belowCon p-2 flex flex-col">
					<span className="overflow-hidden">{dataObject.leadLine}</span>
				</div>
			</div>	
		</>
	);
}


export default Focuscard;
