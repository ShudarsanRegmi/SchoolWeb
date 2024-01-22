

export const Card = ({data})=> {
	console.log(data);
	return(
		<>
			<div className="myContainer border-2 border-gray-500 flex flex-col max-w-56 max-h-210 self-start">
				<div className="image max-h-[100%]" >
					<img src={data.img} alt=""/>
				</div>
				<div className="truncate p-2 bg-yellow-500 text-center">{data.title}</div>
				<button className="border-2 border-green-700 bg-slate-700">Read More</button>
			</div>
		</>
	);
}
