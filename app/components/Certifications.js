'use client';

import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const certificationsData = [
	{
		title: 'BLP Machine Learning & AI',
		image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
	},
	{
		title: 'BLP Blockchain & IoT',
		image: 'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg'
	},
	{
		title: 'Wadhwani Foundation – Entrepreneurship & Skill Development',
		image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg'
	}
];

export default function Certifications() {
	const [ref, isInView] = useInView({ threshold: 0.3 });
	const [selectedCert, setSelectedCert] = useState(null);

	return (
		<>
			<section id="certifications" className="section py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
				<div className="max-w-6xl mx-auto">
					<h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ff004f] mb-6 sm:mb-8 transition-all duration-600 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
						Certifications
					</h2>

					<ul className={`space-y-3 sm:space-y-4 transition-all duration-800 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
						{certificationsData.map((cert, index) => (
							<li key={index}>
								<button
									onClick={() => setSelectedCert(cert)}
									className="w-full text-left bg-transparent border-0 font-semibold text-sm sm:text-base lg:text-lg cursor-pointer p-0 hover:text-[#ff004f] transition-colors duration-200 flex items-center gap-2"
									style={{ color: 'var(--text-primary)' }}
								>
									{cert.title}
									<i className="fa-solid fa-up-right-from-square text-sm opacity-75"></i>
								</button>
							</li>
						))}
					</ul>
				</div>
			</section>

			{selectedCert && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
					<div
						className="absolute inset-0 bg-black/70"
						onClick={() => setSelectedCert(null)}
					></div>

					<div className="relative max-w-4xl w-full bg-transparent rounded-xl overflow-hidden z-10">
						<button
							onClick={() => setSelectedCert(null)}
							className="absolute right-2 sm:right-3 top-2 sm:top-3 bg-black/50 text-white text-lg sm:text-xl p-2 rounded-lg cursor-pointer z-20 hover:bg-black/70"
						>
							<i className="fa-solid fa-xmark"></i>
						</button>

						<img
							src={selectedCert.image}
							alt={selectedCert.title}
							className="w-full h-auto block rounded-lg"
						/>
					</div>
				</div>
			)}
		</>
	);
}