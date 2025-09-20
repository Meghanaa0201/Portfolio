'use client';

import { useInView } from '../hooks/useInView';

const educationData = [
	{
		title: 'B.E. Computer Science — Sai Vidya Institute of Technology',
		period: '2022 — 2026 • Current CGPA: 9.3'
	},
	{
		title: 'Pre-University (Science) — Nagarjuna PU College',
		period: '2020 — 2022 • 94%'
	},
	{
		title: 'CBSE Class X — Air Force School Yelahanka',
		period: '2020 • 80%'
	}
];

export default function Education() {
	const [ref, isInView] = useInView({ threshold: 0.3 });

	return (
		<section id="education" className="section py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
			<div className="max-w-6xl mx-auto">
				<h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ff004f] mb-6 sm:mb-8 transition-all duration-600 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
					Education
				</h2>

				<div className="space-y-3 sm:space-y-4">
					{educationData.map((item, index) => (
						<div
							key={index}
							className={`bg-[var(--card)] border border-[var(--border-color)] p-3 sm:p-4 rounded-lg transition-all duration-600 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
								}`}
							style={{ transitionDelay: `${300 + index * 200}ms` }}
						>
							<h4 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-1">{item.title}</h4>
							<p className="text-sm sm:text-base text-[var(--text-muted)]">{item.period}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}