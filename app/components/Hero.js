'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const roles = [
	'Java Full Stack Developer',
	'AIML & Data Science Enthusiast',
	'Cloud(AWS) & DevOps Engineer'
];

export default function Hero() {
	const [currentRole, setCurrentRole] = useState('');
	const [roleIndex, setRoleIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	// Typing animation effect
	useEffect(() => {
		const typeSpeed = isDeleting ? 40 : 80;
		const currentText = roles[roleIndex];

		const timer = setTimeout(() => {
			if (!isDeleting) {
				if (charIndex < currentText.length) {
					setCurrentRole(currentText.slice(0, charIndex + 1));
					setCharIndex(charIndex + 1);
				} else {
					setTimeout(() => setIsDeleting(true), 1200);
				}
			} else {
				if (charIndex > 0) {
					setCurrentRole(currentText.slice(0, charIndex - 1));
					setCharIndex(charIndex - 1);
				} else {
					setIsDeleting(false);
					setRoleIndex((roleIndex + 1) % roles.length);
				}
			}
		}, typeSpeed);

		return () => clearTimeout(timer);
	}, [charIndex, isDeleting, roleIndex]);

	return (
		<section id="home" className="section relative min-h-screen flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-black/35 to-black/50 px-4 sm:px-6 lg:px-8">
			<div className="relative z-10 w-full max-w-6xl mx-auto">
				<div className="flex items-center justify-between flex-col-reverse lg:flex-row gap-6 sm:gap-8 lg:gap-12 text-center lg:text-left">

					{/* Text Content */}
					<div className="max-w-2xl w-full lg:w-auto">
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-[#ff004f] text-shadow-lg">
							Meghana A
						</h1>

						<div className="flex items-center gap-2 mb-4 sm:mb-6 justify-center lg:justify-start">
							<span className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FF007F]">
								{currentRole}
							</span>
							<span className="text-lg sm:text-xl md:text-2xl text-[#FF007F] animate-pulse">|</span>
						</div>

						<p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0" style={{ color: 'var(--hero-text-secondary)' }}>
							<span className="font-medium" style={{ color: 'var(--hero-text-primary)' }}>
								Final Year B.E. (Computer Science Engineering)
								<br />
								Passionate about AI, Data Science, Cloud & Full Stack Development
							</span>
						</p>
					</div>

					{/* Profile Photo */}
					<div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl transition-transform duration-300 hover:scale-105 flex-shrink-0">
						<Image
							src="./Profile_img.jpg"
							alt="Meghana A"
							width={224}
							height={224}
							className="w-full h-full object-cover"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}