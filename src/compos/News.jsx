import NewsCard from '../compos/NewsCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const News = ()=> {


const NewsItems = [
  {
    title: "VIT Vallore Excels in National Hackathon",
    image: "https://placekitten.com/800/400", // Placeholder image from a random image API
    leadLine: "In a remarkable achievement, Vellore Institute of Technology (VIT) secured the top position in the prestigious Falano Hackathon. The competition witnessed intense competition from across the nation, but VIT emerged victorious, showcasing its prowess in innovation and technology.",
  },
  {
    title: "VIT Researchers Make Breakthrough Discovery",
    image: "https://placekitten.com/801/400", // Placeholder image from a random image API
    leadLine: "A team of researchers at VIT Vallore has made a groundbreaking discovery in the field of [specific field]. Their innovative approach and dedication have once again placed VIT at the forefront of cutting-edge research and development.",
  },
  {
    title: "VIT Hosts International Conference on [Topic]",
    image: "https://placekitten.com/802/400", // Placeholder image from a random image API
    leadLine: "Vellore Institute of Technology played host to an esteemed international conference on [specific topic]. Renowned experts from around the world gathered at VIT to exchange ideas and insights, further solidifying the institution's global reputation as a hub for academic excellence.",
  },

  {
    title: "VIT Hosts International Conference on [Topic]",
    image: "https://placekitten.com/803/400", // Placeholder image from a random image API
    leadLine: "Vellore Institute of Technology played host to an esteemed international conference on [specific topic]. Renowned experts from around the world gathered at VIT to exchange ideas and insights, further solidifying the institution's global reputation as a hub for academic excellence.",
  },
];
	return(
		<div className='bg-purple-900'>
			<div className="header flex justify-between text-white items-center px-2">
				<h1 className="text-2xl font-semibold mt-3">News</h1>
				<span> <ArrowForwardIosIcon fontSize='small'  /> View All</span>
			</div>				
			<div className="newsCardsCon flex justify-around  flex-wrap mt-2 ">
				{NewsItems.map((item,index)=> {
					return(<> <NewsCard dataObject={item} key={index} /></>)
				})}
			</div>
		</div>
	);
}


export default News;
