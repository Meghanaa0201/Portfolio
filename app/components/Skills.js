'use client';

import { useInView } from '../hooks/useInView';

const technicalSkillsData = [
	{
		name: 'Java',
		level: 90
	},
	{
		name: 'SQL / Databases',
		level: 85
	},
	{
		name: 'Python',
		level: 84
	},
	{
		name: 'JavaScript',
		level: 80
	},
	{
		name: 'React / Node.js',
		level: 75
	}
];

const softSkillsData = [
	'Teamwork & Leadership',
	'Problem Solving',
	'Time Management',
	'Continuous Learning'
];

export default function Skills() {
	const [ref, isInView] = useInView({ threshold: 0.3 });

	return (
		<section id="skills" className="section py-20" ref={ref}>
			<div className="max-w-6xl mx-auto">
				<h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ff004f] mb-6 sm:mb-8 transition-all duration-600 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
					Skills
				</h2>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
					{/* Technical Skills - Left Side */}
					<div className={`bg-[var(--card)] border border-[var(--border-color)] p-4 sm:p-6 rounded-lg transition-all duration-600 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
						<h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#c41f55] mb-4 sm:mb-6">Technical Skills</h4>

						<div className="space-y-3 sm:space-y-4">
							{technicalSkillsData.map((skill, index) => (
								<div
									key={index}
									className={`transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
									style={{ transitionDelay: `${600 + index * 100}ms` }}
								>
									<label className="block text-[var(--text-primary)] mb-1 sm:mb-2 text-sm sm:text-base font-medium">
										{skill.name}
									</label>
									<div className="bg-[var(--muted)] rounded-lg h-2 sm:h-3 overflow-hidden">
										<div
											className={`h-full bg-gradient-to-r from-[#ff004f] to-[#ff6a8a] rounded-lg transition-all duration-1200 ${isInView ? `w-[${skill.level}%]` : 'w-0'}`}
											style={{
												transitionDelay: `${800 + index * 100}ms`,
												width: isInView ? `${skill.level}%` : '0%'
											}}
										></div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Soft Skills - Right Side */}
					<div className={`bg-[var(--card)] border border-[var(--border-color)] p-4 sm:p-6 rounded-lg transition-all duration-600 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '500ms' }}>
						<h4 className={`text-lg sm:text-xl lg:text-2xl font-semibold text-[#c41f55] mb-3 sm:mb-4 transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '800ms' }}>
							Soft Skills
						</h4>

						<ul className={`space-y-1.5 sm:space-y-2 transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '1000ms', color: 'var(--text-secondary)' }}>
							{softSkillsData.map((skill, index) => (
								<li key={index} className="text-sm sm:text-base">
									• {skill}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}