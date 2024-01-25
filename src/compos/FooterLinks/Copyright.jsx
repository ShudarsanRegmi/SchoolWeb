import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {YoutubeSearchedFor} from '@mui/icons-material';

const Copyright = ()=> {
	return (
		<div className="copyRightCon flex flex-col justify-between bg-slate-800 text-white">
			<div className="flex justify-between p-2">
				<div className="copyrow1">
					<h5>Copyright &copy; VIT</h5>
				</div>
				<div className="socialIcons flex gap-5">
					<a href="#">
						<FacebookIcon />				
					</a>
					<a href="#">
						<XIcon/>				
					</a>
					<a href="#">
						<LinkedInIcon />				
					</a>
					<a href="#">
						<InstagramIcon/>				
					</a>
					<a href="#">
						<YoutubeSearchedFor />				
					</a>

				</div>
			</div>
			<hr/>
			<div className="copyrow2 ml-auto p-2 pbb-4">
				<h5>Last Updated: Jan 2024</h5>
			</div>
		</div>
	);
}

export default Copyright;
