import { Card } from "./Card";
import { Bulletin } from "./Bulletin";
// import * as cardImages from "./cardImages/" // try to understand why this doesn't work
//
import img1 from './cardImages/1.jpg';
import img2 from './cardImages/2.jpg';
import img3 from './cardImages/3.jpg';
import img4 from './cardImages/4.jpg';
import img5 from './cardImages/5.jpg';

const cardDetails = [
	{ id: 1, title: "VIT Mathematical meet VIT technical", img: img1 },
	{ id: 2, title: "Quantum computing and data analytics using python", img: img2 },
	{ id: 3, title: "Second IEE and ACM collabortive second IEE and ", img: img3 },
	{ id: 4, title: "AIOT product deployment AIOT product ", img: img4 },
	{ id: 5, title: "8th Internationa Conference 8th Internaitonal", img: img5 },
]


export const Noticeboard = () => {
	return (
		<>
			{/* <div className="myContainer bg-orange-400 flex justify-center items-center gap-5 mt-3"> */}
			<div className="myContainer bg-orange-400 grid grid-cols-1 sm:grid-cols-2">
				{/* <div className="cardsCon bg-green-300 p-4 flex flex-wrap justify-center items-center"> */}
				<div className="bg-yellow-500 p-2">
					<h1 className="font-bold text-3xl pb-2 font-mono">Upcoming events</h1>
					{/* <div className="border-2 border-red-700 cardsCon bg-green-300 p-4 grid grid-rows-1 grid-cols-1 md:grid-cols-2 self-center gap-1 "> */}
					<div className="border-2 border-red-700 cardsCon bg-green-300 p-4 flex overflow-auto  gap-2 self-center align-center">
						{cardDetails.map((item, index) => {
							return <Card data={item} key={index} />
						})}
					</div>
				</div>
				<div className="bulletinCon bg-red-200 p-3 pt-5 basis-1">
					<Bulletin />
				</div>
			</div>
		</>
	);
}
