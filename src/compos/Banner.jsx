import css from './css/banner.module.css';
import Bannerimg from '../assets/bannerCentral.webp';


function Innerbox({innerMarkup,header,point,para}) {
	return(
		<>
			<div className="out flex gap-3" style={{color: "magenta"}}>
				<div className="logo ">Logo</div>
				<div className="points">
				<h1 className='text-2xl font-bold'>{header}</h1>
					{point ? 
						
					<ul className='list-disc list-outside p-3'>
						{innerMarkup.map((item,index)=>{
							return <li key={index}>{item}</li>
						})}
					</ul>
					:
					<p>
						{para}
					</p>
					}
				</div>
			</div>
		</>
	);
}



var point1 = [
  "VIT National & Global Rankings",
  "ARIIA Ranking Govt. of India.",
  "VIT 240th Best Institution of the world in the Engineering and Technology",
  "VIT is one among the top 3 in India and within 601-700 universities of the world as per Shanghai ARWU (Academic Ranking of World Universities) 2022"
];

var point2 = [
  "2409+ Dream Offers",
  "2027+ Super Dream Offers",
  "873+ Dream & Super Dream Internship offers",
  "1798+ Regular Offers",
  "12508+ Over all Offers",
  "Limca Book of Records for the 10th time for unbeatable placement records.",
  "Highest CTC: 75.00 Lakhs per annum",
  "771 Number of Companies"
];



let para1 = "VIT has a strong international presence across the world and academic partnerships with over 440 foreign universities. VIT provides options to study 2 years at VIT and 2 years at a partner foreign university. One may also study a semester abroad or engage in international research collaboration activities with partners.";


let para2 = "VIT Group of Institutions offer 64 Undergraduate, 35 Postgraduate, 16 Integrated, 2 Research programmes and 2 M.Tech Industrial Programmes. In addition, full-time Ph.D. in Engineering and Management disciplines, Ph.D. in Science and Languages and Integrated Ph.D. programmes in engineering disciplines are offered.";

const Banner = ()=> {
	console.log("banner..");
	return (
		<>
		<div className="mycon grid grid-cols-3 gap-3">
			<div className={css.items}>
				<Innerbox innerMarkup={point1} header={"Ranking and Recognition"} point={true} />
			</div>
			<div className={css.items} id={css.emp}>
				<img src={Bannerimg} alt='banner'/>	
			</div>
			<div className={css.items}>
				<Innerbox innerMarkup={point2} header={"Placements"}  point={true}/>
			</div>
			<div className={css.items}>
				<Innerbox para={para1} header={"Placements"}  point={false}/>
			</div>
			<div className={css.items}>
				<Innerbox para={para2} header={"Admissiosn"}  point={false}/>
			</div>
		</div>
	</>
	);
}

export default Banner;
