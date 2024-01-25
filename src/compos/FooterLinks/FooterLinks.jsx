import LinksCon from "./LinksCon";
import Copyright from "./Copyright";

import img1 from '../../../public/footerImages/1.webp'
import img2 from '../../../public/footerImages/2.webp'
import img3 from '../../../public/footerImages/3.webp'
import img4 from '../../../public/footerImages/4.webp'

const FooterLinks = ()=> {

	return(
		<>
			<div className="grid grid-cols-[2fr_3fr] bg-slate-900" >
				<LinksCon />
				<div className="footerImagesCon flex flex-wrap justify-center  gap-1 ">
					<img src={img1} alt=""/>
					<img src={img2} alt=""/>
					<img src={img3} alt=""/>
					<img src={img4} alt=""/>
				</div>	
			</div>

			<Copyright />
		</>
	);
}

export default FooterLinks; 
