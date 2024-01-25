import EastIcon from '@mui/icons-material/East';

import img1 from '../../public/img1.webp';
import img2 from '../../public/img2.webp';
import img3 from '../../public/img3.webp';
import img4 from '../../public/img4.webp';
import img5 from '../../public/img5.webp';
import {East} from '@mui/icons-material';

function handleMouseOver(e) {
	console.log(e.currentTarget.children[2]);
	e.currentTarget.children[2].style.transform = "translateY(0%)";
	console.log(e.currentTarget.children[1])
	e.currentTarget.children[1].style.visibility = "hidden";
	// e.currentTarget.style.visibility = "hidden";
}
function handleMouseOut(e) {
	console.log(e.currentTarget.children[2]);
	e.currentTarget.children[2].style.transform = "translateY(100%)";
	console.log(e.currentTarget.children[1])
	e.currentTarget.children[1].style.visibility = "visible";
}

const Imagecard = ({dataObject})=> {
	console.log("mydataobj");
	console.log(dataObject);
	return(
		<>
			<div className="galCardCon border-2 border-green-700 relative  cursor-pointer overflow-hidden" onMouseOver={(e)=>{handleMouseOver(e)}} onMouseOut={handleMouseOut} >
					<img src={dataObject.img} className='' alt=""/>
					<div className="overlay h-[90%] w-[90%] border-2 border-white absolute top-0 right-0 border-r-0 border-b-0 transition-all transition-duration-500 transition-delay-500 ">
						<h1 className='text-white pl-2 font-bold text-2xl uppercase font-mono tracking-tight underline' >{dataObject.header}</h1>	
					</div>
				<div className="jhyal p-5 flex flex-col justify-center absolute bottom-0 bg-gray-700 text-white w-[100%] -translate-y-[-100%] transition duration-[300ms]">
					<h1 className="pl-3 uppercase font-bold">{dataObject.header}</h1>	
					<a className='text-center p-2 px-3 border-2 border-white hover:bg-white hover:text-black transition-all' href="">Explore <East className='ml-5' /> </a>
				</div>
			</div>	
		</>
	);
}



const Gallery = ()=> {
	console.log("hello from gallery");
	const dataArr = [
		{header: "Photo Gallery", img:img1},
		{header: "Campus Tour", img:img2},
		{header: "Video Gallery", img:img3},
		{header: "Hostel", img:img4},
		{header: "Guest House", img:img5}
	];
	return(
		<>
			<div className="galleryCon">
				<div className="galleryCon flex justify-center flex-wrap gap-2 md:flex-nowrap">
				{dataArr.map((item,index)=>{
					return <Imagecard dataObject={item} key={index}/>
				})}		
			</div>
			</div>
		</>
	);
}


export default Gallery;
