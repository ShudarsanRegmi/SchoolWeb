const MileChildren = ({head,desc})=> {
	return(
		<>
			<div className="childCon">
				<h1>{head}</h1>	
				<span  className="inline-block">{desc}</span>
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
			<div className="milesCon">
				{MileChildrens.map((item,index)=>{
					return <MileChildren head={item.head} desc={item.desc} key={index} />
				})}
			</div>
		</>
	);
}

export default Milestones;
