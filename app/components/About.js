'use client';

import { useInView } from '../hooks/useInView';

export default function About() {
	const [ref, isInView] = useInView({ threshold: 0.3 });

	return (
		<section id="about" className="section py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
			<div className="max-w-6xl mx-auto">
				<h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ff004f] mb-4 sm:mb-6 transition-all duration-600 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
					About Me
				</h2>

				<p
					className={`text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 transition-all duration-600 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
					style={{ color: 'var(--text-primary)' }}
				>
					I'm Meghana, a final-year Computer Science student with a strong interest in AI, Data Science, Cloud
					Computing and Full Stack Development. I love building data-driven web applications and ML solutions that solve real-world problems. I
					focus on readable code, collaborative development, and delivering tangible results.
				</p>

				<div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 transition-all duration-800 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
					<div className="bg-[var(--card)] border border-[var(--border-color)] p-4 sm:p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
						<h3 className="text-lg sm:text-xl font-semibold text-[#c41f55] mb-2 sm:mb-3">Career Objective</h3>
						<p className="text-sm sm:text-base text-[var(--text-secondary)]">
							Apply my technical foundation to design scalable solutions and grow as a developer in AI and
							Full Stack roles while contributing to impactful projects.
						</p>
					</div>

					<div className="bg-[var(--card)] border border-[var(--border-color)] p-4 sm:p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
						<h3 className="text-lg sm:text-xl font-semibold text-[#c41f55] mb-2 sm:mb-3">Quick Facts</h3>
						<ul className="text-sm sm:text-base text-[var(--text-secondary)] space-y-1">
							<li>• Final Year B.E. Sai Vidya Institute of Technology</li>
							<li>• Current CGPA: 9.3</li>
							<li>• Location: Bengaluru, India</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}