import NewsCard from '../compos/NewsCard';

const News = ()=> {

const NewsItems = [
	{
		title: "VIT has secured the top position in falano hackathon",
		image: "",
		leadLine: "Diskano reports that the VIT in vallore is "
	},
	{
		title: "VIT has secured the top position in falano hackathon",
		image: "",
		leadLine: "Diskano reports that the VIT in vallore is "
	},
	{
		title: "VIT has secured the top position in falano hackathon",
		image: "",
		leadLine: "Diskano reports that the VIT in vallore is "
	}
]

	return(
		<>
			<div className="header flex justify-between">
				<h1 className="text-2xl font-semibold">News</h1>
				<span>View All</span>
			</div>				
			<div className="newsCardsCon">
				{NewsItems.map((item,index)=> {
					return(<><NewsCard dataObject={dataObject} /></>)
				})}
			</div>
		</>
	);
}
