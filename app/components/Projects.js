'use client';

import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import ProjectModal from './ProjectModal';

const projectsData = [
	{
		id: 'p1',
		title: 'Smart Crop Recommendation Platform',
		short: 'ML-driven platform recommending crops using soil & weather data.',
		desc: `An ML-powered system that analyzes soil parameters and weather data to recommend suitable crops and sowing schedules. Features: data preprocessing, feature engineering, ensemble model, dashboard for farmers with visualizations and recommendations.`,
		tech: ['React', 'Node.js', 'MongoDB', 'Python', 'scikit-learn', 'Chart.js'],
		images: [
			'./Projects/project1/crop1.jpeg',
			'./Projects/project1/crop2.png',
			'./Projects/project1/crop3.jpg'
		],
		github: 'https://github.com/Meghanaa0201/crop-recommendation',
		demo: 'https://crop-recommendation-demo.netlify.app'
	},
	{
		id: 'p2',
		title: 'AI-Powered Text Summarizer',
		short: 'Text summarization using NLP (extractive + abstractive).',
		desc: `Web tool to condense long articles into concise summaries using NLP techniques (spaCy, Gensim, Transformers). Includes experimentation with extractive and abstractive methods and a Flask backend for model serving.`,
		tech: ['Python', 'Flask', 'spaCy', 'Transformers', 'HTML/CSS/JS'],
		images: [
			'./Projects/project2/summarizer1.webp',
			'./Projects/project2/summariser2.jpeg',
			'./Projects/project2/summariser3.png',
		],
		github: 'https://github.com/Meghanaa0201/text-summarization',
		demo: ''
	},
	{
		id: 'p3',
		title: 'Hybrid Sorting Algorithm Optimizer',
		short: 'Adaptive hybrid sorting solution for performance improvement.',
		desc: `Designed a hybrid sorting approach combining algorithms like QuickSort & MergeSort; adaptively chooses strategy based on input size and data distribution to improve average runtime and memory usage.`,
		tech: ['Python', 'JavaScript', 'Algorithms'],
		images: [
			'./Projects/project3/hyb1.png',
			'./Projects/project3/hyb2.png',
			'./Projects/project3/hyb3.png',
		],
		github: 'https://github.com/Meghanaa0201/hybrid-sorting',
		demo: ''
	},
	{
		id: 'p4',
		title: 'Cruise Operations Management System',
		short: 'Handles bookings, itineraries, passengers and resources.',
		desc: `Database-driven application for managing cruise bookings, passenger records, itinerary scheduling and resource allocation. Includes SQL schema, stored procedures and reporting utilities.`,
		tech: ['SQL', 'Database Design', 'Stored Procedures'],
		images: [
			'./Projects/project4/cruise1.jpg',
			'./Projects/project4/cruise2.jpg',
			'./Projects/project4/cruise3.png',
		],
		github: 'https://github.com/Meghanaa0201/cruise-management',
		demo: ''
	},
	{
		id: 'p5',
		title: 'Interactive Network Simulation Tool',
		short: 'Network topology simulation with packet flow visualization.',
		desc: `A simulation platform for teaching and research. Visualizes network topologies, simulates packet flows, and measures performance metrics to study behavior under different scenarios.`,
		tech: ['Java', 'JavaFX', 'Networking'],
		images: [
			'./Projects/project5/network1.jpeg',
			'./Projects/project5/network2.jpeg',
			'./Projects/project5/network3.jpeg'
		],
		github: 'https://github.com/Meghanaa0201/network-simulation',
		demo: ''
	},
	{
		id: 'p6',
		title: 'AI HealthGuard: Wearable Cardiac Monitor',
		short: 'AI-enabled wearable for real-time cardiac monitoring and alerts.',
		desc: `Embedded + ML solution: collects physiological data, runs lightweight prediction models and pushes alerts. Uses TensorFlow Lite, MQTT for IoT telemetry, and a mobile app dashboard for visualization.`,
		tech: ['Embedded C', 'TensorFlow Lite', 'Python', 'Flutter', 'AWS IoT'],
		images: [
			'./Projects/project6/cardiac1.webp',
			'./Projects/project6/cardiac2.jpeg',
			'./Projects/project6/cardiac3.png'
		],
		github: 'https://github.com/Meghanaa0201/ai-wearable-heart',
		demo: ''
	}
];

export default function Projects() {
	const [ref, isInView] = useInView({ threshold: 0.3 });
	const [selectedProject, setSelectedProject] = useState(null);

	return (
		<>
			<section id="projects" className="section py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
				<div className="max-w-6xl mx-auto">
					<h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ff004f] mb-3 sm:mb-4 transition-all duration-600 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
						Projects
					</h2>

					<p className={`text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 transition-all duration-600 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
						Click any project to view details, images, tech stack and links.
					</p>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
						{projectsData.map((project, index) => (
							<div
								key={project.id}
								className={`group relative bg-[var(--card)] border border-[var(--border-color)] rounded-xl overflow-hidden cursor-pointer transition-all duration-700 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'
									}`}
								style={{ transitionDelay: `${index * 200}ms` }}
								onClick={() => setSelectedProject(project)}
							>
								{/* Project Image */}
								<div
									className="h-32 sm:h-40 bg-cover bg-center bg-gray-700 transition-transform duration-300 group-hover:scale-105"
									style={{ backgroundImage: `url('${project.images[0]}')` }}
								/>

								{/* Project Content */}
								<div className="p-3 sm:p-4">
									<h3 className="text-base sm:text-lg font-semibold mb-2 text-[var(--text-primary)] line-clamp-2">{project.title}</h3>
									<p className="text-[var(--text-muted)] text-xs sm:text-sm mb-3 line-clamp-2">{project.short}</p>

									<div className="flex justify-between items-center">
										<button className="text-xs sm:text-sm bg-[#ff004f] text-white px-2 sm:px-3 py-1 rounded-lg hover:bg-[#ff004f]/80 transition-colors pointer-events-none">
											<i className="fa-solid fa-up-right-from-square mr-1 text-xs"></i>
											View Details
										</button>
										{project.github && (
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-base sm:text-lg"
												onClick={(e) => e.stopPropagation()}
											>
												<i className="fa-brands fa-github"></i>
											</a>
										)}
									</div>
								</div>

								{/* Hover Overlay */}
								<div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center p-3 sm:p-4">
									<h3 className="text-lg sm:text-xl mb-2 text-white group-hover:text-[#ff004f] transition-colors">
										{project.title}
									</h3>
									<span className="border border-white px-2 sm:px-3 py-1 rounded text-sm group-hover:bg-[#ff004f] group-hover:border-[#ff004f] transition-all">
										View Details
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{selectedProject && (
				<ProjectModal
					project={selectedProject}
					onClose={() => setSelectedProject(null)}
				/>
			)}
		</>
	);
}