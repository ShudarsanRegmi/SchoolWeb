import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import logo from "../assets/logo.png"
import {useState} from 'react';
const Navbar = () => {
const [navbaron, setNavbaron] = useState(true);

const openNavbar = ()=>{
	console.log("clicked...");
	const linka = document.getElementById("linka");
	linka.style.transform = "translateY(0rem)";
	setNavbaron((val)=>!val);

}

const closeNavbar= ()=>{
	console.log("clicked...");
	const linka = document.getElementById("linka");
	linka.style.transform = "translateY(-14rem)";
	setNavbaron((val)=>!val);

}
	return(
		<>

		<nav className="bg-orange-500 flex justify-between items-center relative">
			<div className="firstPartCon flex gap-2 bg-yellow-500 items-center px-2">
					
				<div id="log" className='bg-green-100 max-w-10 max-h-10'>
					<img src={logo} alt="logo"/>
				</div>

				<div id="links" className="hidden md:block">
					<ul className='bg-red-200 flex'>
						<li className='mx-2 px-3 py-1 bg-slate-100'>Home</li>
						<li className='mx-2 px-3 py-1 bg-slate-100'>About us</li>
						<li className='mx-2 px-3 py-1 bg-slate-100'>Academics</li>
						<li className='mx-2 px-3 py-1 bg-slate-100'>Admissions</li>
						<li className='mx-2 px-3 py-1 bg-slate-100'>Research</li>
					</ul>
				</div>

				<div id="linka" className="bg-red-300  p-1 w-[100%] flex flex-col absolute left-0 top-[2.9rem] -translate-y-[14rem] transition-all duration-500 md:hidden">
				<ul className=''>
					<li className='mx-2 px-3 py-1 bg-slate-100'>Home</li>
					<li className='mx-2 px-3 py-1 bg-slate-100'>About us</li>
					<li className='mx-2 px-3 py-1 bg-slate-100'>Academics</li>
					<li className='mx-2 px-3 py-1 bg-slate-100'>Admissions</li>
					<li className='mx-2 px-3 py-1 bg-slate-100'>Research</li>
				</ul>
			</div>

				</div>
				<div id="menuIcon" className='flex justify-end items-center bg-pink-900 '>
					<div className="md:hidden MenuIcon h-7 w-9 m-2 bg-slate-500 flex items-center justify-center">
						{navbaron ? <MenuIcon onClick={openNavbar}/> : <CancelIcon onClick={closeNavbar} />}
					</div>
				</div>

				
			</nav>
		</>
	);		
}

export default Navbar;
