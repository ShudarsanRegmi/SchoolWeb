const MileChildren = ({head,desc})=> {
	return(
		<>
			<div className="childCon border-2 border-gray-700 m-3 flex justify-center items-center flex-col">
				<h1 className="font-bold text-5xl">{head}</h1>	
				<span  className="text-center text-sm uppercase pt-4 inline-block w-[60%]">{desc}</span>
			</div>
		</>
	);
}

const Milestones = ()=> {
	const MileChildrens = [
		{head: "A++",desc:"GRADED BY NAAC, MHRD"},
		{head: "190+",desc:"FOREIGN ADJUNCT PROFESSOR"},
		{head: "430",desc:"International Partners"},
		{head: "372 acre",desc:"Eco-friendly campus with over 62 lakhs sq. feet built-up space"},
		{head: "240th",desc:"Eco-friendly campus with over 62 lakhs sq. feet built-up space"},
	];
	return(
		<>
			<div className="milesCon flex py-20 bg-[#1f1a47] text-white flex-wrap justify-center">
				{MileChildrens.map((item,index)=>{
					return <MileChildren head={item.head} desc={item.desc} key={index} />
				})}
			</div>
		</>
	);
}

export default Milestones;
