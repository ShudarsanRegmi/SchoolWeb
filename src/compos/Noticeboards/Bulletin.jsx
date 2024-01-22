import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const Bulletin = ()=> {
	return(
		<>
			<div className="myContainer bg-slate-500 p-3 rounded-md text-white">
				<h1 className='text-3xl mb-2 font-bold font-mono text-black'>BULLETIN BOARD</h1>
				<ul className="">
					<a href="#">
						<li className='overflow-hidden text-nowrap'  > <ExpandLessIcon className='rotate-90' /> Principle got changeded</li>
					</a>
					<a href="#">
						<li className='overflow-hidden text-nowrap'  > <ExpandLessIcon  className='rotate-90' /> Notice for Internship Examination</li>
					</a>
					<a href="#">
						<li className='overflow-hidden text-nowrap'  > <ExpandLessIcon  className='rotate-90' /> Placement examination coming soon</li>
					</a>
					<a href="#">
						<li className='overflow-hidden text-nowrap'  > <ExpandLessIcon  className='rotate-90' /> College holiday due to principle marriage</li>
					</a>
				</ul>
			</div>			
		</>
	);
}
