'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 400);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-between items-center text-[var(--text-muted)] py-4 sm:py-6 px-4 sm:px-0 gap-4 sm:gap-0">
			<p className="text-sm sm:text-base text-center sm:text-left">© 2025 Meghana A • Built with ❤️</p>

			<button
				onClick={scrollToTop}
				className={`bg-[#ff004f] text-white border-0 p-2 sm:p-2.5 rounded-lg cursor-pointer transition-all duration-300 text-sm sm:text-base ${showScrollTop ? 'opacity-100 -translate-y-1' : 'opacity-0 translate-y-0'
					}`}
				title="Back to top"
			>
				<i className="fa-solid fa-arrow-up"></i>
			</button>
		</footer>
	);
}