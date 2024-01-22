import { useEffect, useState } from "react";
import img1 from '../assets/cover/1.jpg'
// import img2 from '../assets/cover/2.jpg'
// import img3 from '../assets/cover/3.jpg'
// import img4 from '../assets/cover/4.jpg'
// import img5 from '../assets/cover/5.jpg'


const Cover = () => {
	return(
		<>
			<div className="myContainer flex">
				<img src={img1} />
			</div>
		</>
	);
}

export default Cover;
