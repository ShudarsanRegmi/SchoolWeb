const LinksBox = ({data})=> {
	console.log("data ayo hai............");
	console.log(data);
	return(
		<div className="p-5">
			<h1 className="font-bold text-white pb-2">{data.header}</h1>
			{data.links.map((item,index)=>{
				return <li className="underline underline-offset-4 text-xs list-inside text-white"><a href='#'>{item}</a></li>
			})}	
		</div>
	);
}
const data = [
	{header: "QUICK LINKS", links: ["Ranking and Recognition", "Admissions", "Infrastructure", "Research @ VIT", "International Relations", "Privacy Policy", "Sitemap"]},
	{header: "VITIANS", links: ["IQAC", "NATS [National Apprenticeship Training Scheme]", "Industrial Visit Form", "Student Code of Conduct"]},
	{header: "VIT @ CONNECT", links: ["Intranet", "Student Login ", "Peoplerobit", "VIT Webmail"]},
	{header: "VISITORS", links: ["Careers", "Alumini", "Campus Tour", "Contact US"]},
	{header: "PARENTS", links: ["Parent Login", "Councelling Division", "Hotels in Vellore", "Guest House", "Campus Life"]},
	{header: "COMMITTEES @ VIT", links: ["IPR and Technology", "Internal Complaits Comittee", "Anti Ragging Comittee", "Comitee for Sustainability Inititives", "Campus Life"]},
]

const LinksCon = ()=> {
	return(
		<div className="grid grid-cols-2">
			{data.map((item,index)=>{
				return <LinksBox data={item} key={index} />
			})}
		</div>
	);
}

export default LinksCon;
