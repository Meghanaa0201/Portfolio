'use client';

import { useInView } from '../hooks/useInView';
import Image from 'next/image';

const contactInfo = [
	{ icon: 'fas fa-envelope', label: 'Email', value: 'Meghanaa1315@gmail.com', href: 'mailto:Meghanaa1315@gmail.com' },
	{ icon: 'fas fa-phone', label: 'Phone', value: '+91 9632451315', href: 'tel:+919632451315' },
	{ icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'linkedin.com/in/meghanaa0201', href: 'https://www.linkedin.com/in/meghanaa0201' },
	{ icon: 'fab fa-github', label: 'GitHub', value: 'github.com/Meghanaa0201', href: 'https://github.com/Meghanaa0201' }
];

const connectButtons = [
	{ icon: 'fas fa-envelope', label: 'Email Me', href: 'mailto:Meghanaa1315@gmail.com', className: 'bg-red-600 hover:bg-red-700' },
	{ icon: 'fab fa-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/meghanaa0201', className: 'bg-blue-600 hover:bg-blue-700' },
	{ icon: 'fab fa-github', label: 'GitHub', href: 'https://github.com/Meghanaa0201', className: 'bg-gray-800 hover:bg-gray-900' }
];

export default function Contact() {
	const [ref, isInView] = useInView({ threshold: 0.3 });

	return (
		<section id="contact" className="section py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
			<div className="max-w-6xl mx-auto">
				<div className="bg-[var(--card)] border border-[var(--border-color)] p-4 sm:p-6 lg:p-8 rounded-xl">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
						{/* Left Column */}
						<div>
							<h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ff004f] mb-3 sm:mb-4 transition-all duration-600 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
								Contact
							</h2>

							<p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed">
								Whether you want to collaborate, discuss new tech, or simply say hello, feel free to
								reach out. I'm always open to new opportunities and connections!
							</p>

							<ul className="space-y-2 sm:space-y-3">
								{contactInfo.map((item, index) => (
									<li key={index} className="flex items-center gap-3">
										<i className={`${item.icon} text-[#ff004f] w-5 text-center`}></i>
										<a
											href={item.href}
											target={item.href.startsWith('http') ? '_blank' : undefined}
											rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
											className="text-sm sm:text-base text-[var(--text-secondary)] hover:text-[#ff004f] transition-colors break-all"
										>
											{item.value}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Right Column */}
						<div>
							<h3 className="text-lg sm:text-xl font-semibold text-[#c41f55] mb-3 sm:mb-4">Connect with me:</h3>
							<div className="space-y-2 sm:space-y-3">
								{connectButtons.map((button, index) => (
									<a
										key={index}
										href={button.href}
										target={button.href.startsWith('http') ? '_blank' : undefined}
										rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
										className={`flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:opacity-90 text-sm sm:text-base ${button.className}`}
									>
										<i className={`${button.icon} text-base sm:text-lg`}></i>
										{button.label}
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}