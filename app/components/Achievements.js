'use client';

import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

const countersData = [
	{ target: 6, label: 'Projects' },
	{ target: 3, label: 'Certifications' },
	{ target: 4, label: 'Scholarships / Awards' }
];

const achievementsList = [
	'Led Sangama Fest 2023 (500+ attendees)',
	'Pratt & Whitney Scholarship — Top 20/400',
	'2024 Women in Engineering Scholar (1 of 5 nationally)',
	'LPF Scholarship 2022 (selected from 4,200+)'
];

export default function Achievements() {
	const [ref, isInView] = useInView({ threshold: 0.3 });
	const [counters, setCounters] = useState(countersData.map(() => 0));
	const [hasStarted, setHasStarted] = useState(false);

	useEffect(() => {
		if (isInView && !hasStarted) {
			setHasStarted(true);

			countersData.forEach((counter, index) => {
				const increment = Math.max(1, Math.floor(counter.target / 50));
				let current = 0;

				const timer = setInterval(() => {
					current += increment;
					if (current >= counter.target) {
						current = counter.target;
						clearInterval(timer);
					}

					setCounters(prev => {
						const newCounters = [...prev];
						newCounters[index] = current;
						return newCounters;
					});
				}, 30);
			});
		}
	}, [isInView, hasStarted]);

	return (
		<section id="achievements" className="section py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
			<div className="max-w-6xl mx-auto">
				<h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ff004f] mb-4 sm:mb-6 transition-all duration-600 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
					Achievements & Stats
				</h2>

				{/* Counters */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
					{countersData.map((item, index) => (
						<div
							key={index}
							className={`bg-[var(--card)] border border-[var(--border-color)] p-4 sm:p-6 rounded-lg text-center transition-all duration-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
								}`}
							style={{ transitionDelay: `${300 + index * 200}ms` }}
						>
							<div className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-1 sm:mb-2">{counters[index]}</div>
							<div className="text-sm sm:text-base text-[var(--text-muted)]">{item.label}</div>
						</div>
					))}
				</div>

				{/* Achievements List */}
				<h3 className={`text-lg sm:text-xl font-semibold text-[#c41f55] mb-3 sm:mb-4 transition-all duration-600 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
					Selected Achievements
				</h3>

				<ul className={`space-y-2 sm:space-y-3 text-sm sm:text-base text-[var(--text-secondary)] transition-all duration-600 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
					{achievementsList.map((achievement, index) => (
						<li key={index} className="flex items-start gap-3">
							<span className="text-[#ff004f] mt-1">•</span>
							{achievement}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}