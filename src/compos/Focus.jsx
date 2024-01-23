import Focuscard from './Focuscard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Focus= ()=> {


const FocusItem = [
  {
    image: "https://placekitten.com/801/399", // Placeholder image from a random image API
    leadLine: "In a remarkable achievement, Vellore Institute of Technology (VIT) secured the top position in the prestigious Falano Hackathon. The competition witnessed intense competition from across the nation, but VIT emerged victorious, showcasing its prowess in innovation and technology.",
  },
  {
    image: "https://placekitten.com/802/400", // Placeholder image from a random image API
    leadLine: "A team of researchers at VIT Vallore has made a groundbreaking discovery in the field of [specific field]. Their innovative approach and dedication have once again placed VIT at the forefront of cutting-edge research and development.",
  },
  {
    image: "https://placekitten.com/802/399", // Placeholder image from a random image API
    leadLine: "Vellore Institute of Technology played host to an esteemed international conference on [specific topic]. Renowned experts from around the world gathered at VIT to exchange ideas and insights, further solidifying the institution's global reputation as a hub for academic excellence.",
  },

  {
    image: "https://placekitten.com/803/399", // Placeholder image from a random image API
    leadLine: "Vellore Institute of Technology played host to an esteemed international conference on [specific topic]. Renowned experts from around the world gathered at VIT to exchange ideas and insights, further solidifying the institution's global reputation as a hub for academic excellence.",
  },
];
	return(
		<div className='bg-indigo-900 pb-3'>
			<div className="header flex justify-between text-white items-center px-2">
				<h1 className="text-2xl font-semibold mt-3">Focus In</h1>
				<div className="contrlsCon">
					L R
				</div>
			</div>				
			<div className="newsCardsCon flex justify-around  flex-wrap mt-2 ">
				{FocusItem.map((item,index)=> {
					return(<Focuscard dataObject={item} key={index} />)
				})}
			</div>
		</div>
	);
}


export default Focus;
