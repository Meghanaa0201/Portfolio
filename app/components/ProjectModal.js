'use client';

import { useState, useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [autoSlide, setAutoSlide] = useState(true);

	useEffect(() => {
		if (!autoSlide) return;

		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % project.images.length);
		}, 3500);

		return () => clearInterval(interval);
	}, [autoSlide, project.images.length]);

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape') onClose();
			if (e.key === 'ArrowLeft') {
				setCurrentSlide((prev) => prev === 0 ? project.images.length - 1 : prev - 1);
				setAutoSlide(false);
			}
			if (e.key === 'ArrowRight') {
				setCurrentSlide((prev) => (prev + 1) % project.images.length);
				setAutoSlide(false);
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [onClose, project.images.length]);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % project.images.length);
		setAutoSlide(false);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => prev === 0 ? project.images.length - 1 : prev - 1);
		setAutoSlide(false);
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div className="absolute inset-0 bg-black/70" onClick={onClose}></div>

			<div className="relative w-[95%] sm:w-[92%] max-w-5xl bg-gradient-to-b from-gray-900 to-black/60 rounded-xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto m-4">
				<button
					onClick={onClose}
					className="absolute right-2 sm:right-3 top-2 bg-transparent border-0 text-gray-400 text-lg sm:text-xl p-2 cursor-pointer z-20 hover:text-white"
				>
					<i className="fa-solid fa-xmark"></i>
				</button>

				<div className="flex gap-3 sm:gap-4 p-3 sm:p-4 flex-col lg:flex-row">
					{/* Image Gallery */}
					<div className="flex-1 relative min-h-48 sm:min-h-64 lg:min-h-80 bg-black rounded-lg overflow-hidden">
						<div className="relative w-full h-48 sm:h-64 lg:h-80">
							{project.images.map((image, index) => (
								<div
									key={index}
									className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
										}`}
									style={{ backgroundImage: `url('${image}')` }}
								/>
							))}
						</div>

						{project.images.length > 1 && (
							<>
								<button
									onClick={prevSlide}
									className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 sm:p-2 rounded-lg hover:bg-black/70 transition-colors text-sm sm:text-base"
								>
									<i className="fa-solid fa-chevron-left"></i>
								</button>

								<button
									onClick={nextSlide}
									className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 sm:p-2 rounded-lg hover:bg-black/70 transition-colors text-sm sm:text-base"
								>
									<i className="fa-solid fa-chevron-right"></i>
								</button>
							</>
						)}
					</div>

					{/* Project Info */}
					<div className="w-full lg:w-96 p-2">
						<h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
						<p className="text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{project.desc}</p>

						<div className="mb-3 sm:mb-4">
							<h4 className="text-sm sm:text-base text-[#ff004f] font-semibold mb-2">Technologies:</h4>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, index) => (
									<span
										key={index}
										className="bg-white/10 px-2 py-1 rounded text-xs sm:text-sm font-medium"
										style={{ color: 'var(--text-secondary)' }}
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						<div className="flex gap-2 sm:gap-3 flex-col sm:flex-row">
							{project.github && (
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-center gap-2 bg-[#ff004f] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-[#ff004f]/80 transition-colors text-sm sm:text-base"
								>
									<i className="fa-brands fa-github"></i>
									GitHub
								</a>
							)}
							{project.demo && (
								<a
									href={project.demo}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-center gap-2 border border-white/20 px-3 sm:px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm sm:text-base"
									style={{ color: 'var(--text-secondary)' }}
								>
									<i className="fa-solid fa-arrow-up-right-from-square"></i>
									Demo
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}