'use client';

import { useInView } from '../hooks/useInView';

const leftColumnData = {
	profile: `Eager to immerse myself in transformative technology domains such as Artificial Intelligence, Data Science, Cloud Computing, and Full Stack Development. I aim to apply my technical foundation to solve real-world challenges and expand my capabilities through collaboration, continuous innovation, and mentorship.`,
	education: [
		{
			title: 'B.E. — Computer Science',
			details: '2022 – 2026 • Sai Vidya Institute of Technology • CGPA: 9.3'
		},
		{
			title: 'Pre-University (Science)',
			details: '2020 – 2022 • Nagarjuna PU College • 94%'
		},
		{
			title: 'CBSE Class X',
			details: '2020 • Air Force School Yelahanka • 80%'
		}
	],
	certifications: [
		'BLP Machine Learning & AI',
		'BLP Blockchain & IoT',
		'Wadhwani Foundation — Entrepreneurship & Skill Development'
	],
	technicalSkills: 'Python, JavaScript, Java, HTML, CSS, React.js, Node.js, Pandas, NumPy, scikit-learn, SQL, Git/GitHub, VS Code, Jupyter Notebook',
	softSkills: ['Teamwork & Collaboration', 'Problem Solving', 'Continuous Learning', 'Time Management'],
	languages: ['English', 'Kannada', 'Hindi'],
	hobbies: ['Gardening', 'Riding Bicycle', 'Cooking']
};

const rightColumnData = {
	projects: [
		{
			title: 'Crop Recommendation System',
			desc: 'ML-powered system analyzing soil and weather data to recommend crops.',
			tech: 'React, Node.js, MongoDB, Python (scikit-learn)'
		},
		{
			title: 'Text Summarization Tool',
			desc: 'Online tool using NLP to condense articles into summaries.',
			tech: 'Python (Flask), spaCy, Gensim, Transformers'
		},
		{
			title: 'Hybrid Sorting Algorithm',
			desc: 'Adaptive sorting combining multiple algorithms for performance improvement.',
			tech: 'Python, JavaScript'
		},
		{
			title: 'Cruise Management System',
			desc: 'Database-driven system for cruise bookings and itinerary scheduling.',
			tech: 'SQL, Stored Procedures'
		}
	],
	achievements: [
		'Led Sangama Fest 2023 (500+ attendees)',
		'Pratt & Whitney Scholarship — Top 20/400',
		'2024 Women in Engineering Scholar (1 of 5 nationally)',
		'LPF Scholarship 2022 (selected from 4,200+)'
	]
};

export default function Resume() {
	const [ref, isInView] = useInView({ threshold: 0.3 });

	return (
		<section id="resume" className="section py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
			<div className="max-w-6xl mx-auto">
				<h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ff004f] mb-6 sm:mb-8 transition-all duration-600 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
					Resume
				</h2>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
					{/* Left Column */}
					<div className="bg-[var(--card)] border border-[var(--border-color)] p-4 sm:p-6 rounded-lg space-y-4 sm:space-y-6">
						<div>
							<h3 className="text-lg sm:text-xl font-semibold text-[#c41f55] mb-2 sm:mb-3">Profile</h3>
							<p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">{leftColumnData.profile}</p>
						</div>

						<div>
							<h3 className="text-lg sm:text-xl font-semibold text-[#c41f55] mb-2 sm:mb-3">Education</h3>
							<div className="space-y-2 sm:space-y-3">
								{leftColumnData.education.map((item, index) => (
									<div key={index} className="relative pl-5">
										<div className="absolute left-0 top-2 w-2 h-2 bg-[#ff004f] rounded-full"></div>
										<h4 className="font-semibold text-[var(--text-primary)] text-sm sm:text-base">{item.title}</h4>
										<span className="text-[var(--text-muted)] text-xs sm:text-sm">{item.details}</span>
									</div>
								))}
							</div>
						</div>

						<div>
							<h3 className="text-lg sm:text-xl font-semibold text-[#c41f55] mb-2 sm:mb-3">Certifications</h3>
							<ul className="space-y-1 text-sm sm:text-base">
								{leftColumnData.certifications.map((cert, index) => (
									<li key={index} className="text-[var(--text-secondary)]">• {cert}</li>
								))}
							</ul>
						</div>

						<div>
							<h3 className="text-lg sm:text-xl font-semibold text-[#c41f55] mb-2 sm:mb-3">Technical Skills</h3>
							<p className="text-sm sm:text-base text-[var(--text-secondary)]">{leftColumnData.technicalSkills}</p>
						</div>

						<div>
							<h3 className="text-lg sm:text-xl font-semibold text-[#c41f55] mb-2 sm:mb-3">Soft Skills</h3>
							<ul className="space-y-1 text-sm sm:text-base">
								{leftColumnData.softSkills.map((skill, index) => (
									<li key={index} className="text-[var(--text-secondary)]">• {skill}</li>
								))}
							</ul>
						</div>

						<div>
							<h3 className="text-lg sm:text-xl font-semibold text-[#c41f55] mb-2 sm:mb-3">Languages</h3>
							<ul className="space-y-1 text-sm sm:text-base">
								{leftColumnData.languages.map((lang, index) => (
									<li key={index} className="text-[var(--text-secondary)]">• {lang}</li>
								))}
							</ul>
						</div>

						<div>
							<h3 className="text-lg sm:text-xl font-semibold text-[#c41f55] mb-2 sm:mb-3">Hobbies</h3>
							<ul className="space-y-1 text-sm sm:text-base">
								{leftColumnData.hobbies.map((hobby, index) => (
									<li key={index} className="text-[var(--text-secondary)]">• {hobby}</li>
								))}
							</ul>
						</div>
					</div>

					{/* Right Column */}
					<div className="bg-[var(--card)] border border-[var(--border-color)] p-4 sm:p-6 rounded-lg space-y-4 sm:space-y-6">
						<div>
							<h3 className="text-lg sm:text-xl font-semibold text-[#c41f55] mb-2 sm:mb-3">Academic Projects</h3>
							<div className="space-y-3 sm:space-y-4">
								{rightColumnData.projects.map((project, index) => (
									<div key={index} className="relative pl-5">
										<div className="absolute left-0 top-2 w-2 h-2 bg-[#ff004f] rounded-full"></div>
										<h4 className="font-semibold text-[var(--text-primary)] mb-1 text-sm sm:text-base">{project.title}</h4>
										<p className="text-[var(--text-secondary)] text-xs sm:text-sm mb-1">{project.desc}</p>
										<span className="text-[var(--text-muted)] text-xs">Tech: {project.tech}</span>
									</div>
								))}
							</div>
						</div>

						<div>
							<h3 className="text-lg sm:text-xl font-semibold text-[#c41f55] mb-2 sm:mb-3">Achievements</h3>
							<ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
								{rightColumnData.achievements.map((achievement, index) => (
									<li key={index} className="text-[var(--text-secondary)]">• {achievement}</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				<div className="text-center mt-6 sm:mt-8">
					<a
						href="#"
						className="inline-flex items-center gap-2 bg-[#ff004f] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#ff004f]/80 transition-colors text-sm sm:text-base"
						download
					>
						<i className="fa-solid fa-download"></i>
						Download Resume
					</a>
				</div>
			</div>
		</section>
	);
}