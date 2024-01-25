import css from  './css/keepmeup.module.css';
const Keepmeupdated = ()=> {
	return(
		<>
			<div className="keepmeupCon grid grid-cols-[1fr_2fr]">
				<div className="item1  bg-red-700 text-white flex justify-center items-center">
					<h1 className='text-2xl font-bold'>KEEP ME UPDATED</h1>
				</div>
				<div className="item2 border-2 border-red-500">
					<form action="" className="flex justify-between items-center p-8">
						<input className={css.formItem} type="text" name="text" placeholder="Enter Your Name" />
						<input className={css.formItem} type="email" name="email" placeholder="Enter Your Mail Id" />
						<input className={css.formItem} type="phone" name="phone" placeholder="	Enter Mobile Number" />
						<button className='bg-red-700 text-white py-1 px-3 font-light'>SUBMIT</button>
					</form>	
				</div>
			</div>
		</>
	);
}

export default Keepmeupdated;
