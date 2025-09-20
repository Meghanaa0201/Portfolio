'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const navigation = [
	{ id: 'home', href: '#home', icon: 'fa-house', label: 'Home' },
	{ id: 'about', href: '#about', icon: 'fa-user', label: 'About' },
	{ id: 'skills', href: '#skills', icon: 'fa-code', label: 'Skills' },
	{ id: 'projects', href: '#projects', icon: 'fa-diagram-project', label: 'Projects' },
	{ id: 'certifications', href: '#certifications', icon: 'fa-award', label: 'Certifications' },
	{ id: 'achievements', href: '#achievements', icon: 'fa-trophy', label: 'Achievements' },
	{ id: 'education', href: '#education', icon: 'fa-graduation-cap', label: 'Education' },
	{ id: 'resume', href: '#resume', icon: 'fa-file-alt', label: 'Resume' },
	{ id: 'contact', href: '#contact', icon: 'fa-envelope', label: 'Contact' },
];

const socialLinks = [
	{ href: 'https://www.linkedin.com/in/meghanaa0201', icon: 'fa-linkedin', title: 'LinkedIn' },
	{ href: 'https://github.com/Meghanaa0201', icon: 'fa-github', title: 'GitHub' },
	{ href: 'mailto:Meghanaa1315@gmail.com', icon: 'fa-envelope', title: 'Email' },
];

export default function Sidebar({ currentSection, theme, toggleTheme }) {
	const [activeSection, setActiveSection] = useState('home');
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const sections = navigation.map(nav => nav.id);
			const scrollPosition = window.scrollY + 100;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (href) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			setIsMobileMenuOpen(false); // Close mobile menu after navigation
		}
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			{/* Mobile Hamburger Button */}
			<button
				onClick={toggleMobileMenu}
				className="fixed top-4 left-4 z-50 bg-[#1a1a1a] text-white p-3 rounded-lg border border-white/10 md:hidden"
				aria-label="Toggle menu"
			>
				<i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
			</button>

			{/* Mobile Menu Overlay */}
			{isMobileMenuOpen && (
				<div
					className="fixed inset-0 bg-black/50 z-40 md:hidden"
					onClick={() => setIsMobileMenuOpen(false)}
				></div>
			)}

			{/* Desktop Sidebar */}
			<aside className="fixed left-0 top-0 bottom-0 w-[230px] p-5 bg-[var(--panel)] flex flex-col gap-3 border-r border-[var(--border-color)] z-30 lg:w-[230px] md:w-[70px] md:p-4 max-md:hidden">
				{/* Profile Section */}
				<div className="text-center md:hidden lg:block">
					<div className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] mx-auto mb-2 rounded-full border-3 border-[var(--border-color)] overflow-hidden">
						<Image
							src="./Profile_img.jpg"
							alt="Meghana A"
							width={90}
							height={90}
							className="w-full h-full object-cover"
						/>
					</div>
					<h1 className="text-base lg:text-lg font-semibold mb-1 text-[var(--text-primary)]">Meghana A</h1>
					<p className="text-xs text-[var(--text-muted)] hidden lg:block">Final Year • B.E. CSE • CGPA 9.3</p>
				</div>

				{/* Theme Toggle */}
				<div className="flex justify-center">
					<button
						onClick={toggleTheme}
						className="bg-transparent border-0 text-[var(--text-muted)] text-lg cursor-pointer p-1.5 rounded-lg transition-all duration-200 hover:text-[var(--accent)] hover:-translate-y-1"
						title="Toggle light/dark"
					>
						<i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
					</button>
				</div>

				{/* Navigation */}
				<nav className="flex-1">
					<ul className="list-none p-0 m-0 flex flex-col gap-1.5">
						{navigation.map((item) => (
							<li key={item.id}>
								<a
									href={item.href}
									onClick={(e) => {
										e.preventDefault();
										scrollToSection(item.href);
									}}
									className={`flex gap-2.5 items-center p-2 rounded-lg font-semibold text-sm opacity-95 transition-all duration-300 hover:bg-[var(--hover-bg)] hover:text-[var(--accent)] hover:translate-x-1 md:justify-center lg:justify-start ${activeSection === item.id
										? 'bg-[var(--hover-bg)] text-[var(--accent)] border-l-3 border-[var(--accent)]'
										: 'text-[var(--text-primary)]'
										}`}
								>
									<i className={`fa-solid ${item.icon} w-4 text-center ${activeSection === item.id ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}`}></i>
									<span className="md:hidden lg:block">{item.label}</span>
								</a>
							</li>
						))}
					</ul>
				</nav>

				{/* Social Links */}
				<div className="flex justify-center gap-2.5 mt-auto">
					{socialLinks.map((social, index) => (
						<a
							key={index}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[var(--text-muted)] text-base transition-all duration-200 hover:text-[var(--accent)] hover:-translate-y-1"
							title={social.title}
						>
							<i className={`${social.icon === 'fa-envelope' ? 'fa-solid' : 'fa-brands'} ${social.icon}`}></i>
						</a>
					))}
				</div>
			</aside>

			{/* Mobile Sidebar */}
			<aside className={`fixed left-0 top-0 bottom-0 w-[260px] bg-[var(--panel)] border-r border-[var(--border-color)] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
				<div className="flex flex-col h-full p-4 gap-3">
					{/* Profile Section */}
					<div className="text-center pt-10">
						<div className="w-[60px] h-[60px] mx-auto mb-2 rounded-full border-3 border-[var(--border-color)] overflow-hidden">
							<Image
								src="./Profile_img.jpg"
								alt="Meghana A"
								width={60}
								height={60}
								className="w-full h-full object-cover"
							/>
						</div>
						<h1 className="text-base font-semibold mb-1 text-[var(--text-primary)]">Meghana A</h1>
						<p className="text-xs text-[var(--text-muted)]">Final Year • B.E. CSE • CGPA 9.3</p>
					</div>

					{/* Theme Toggle */}
					<div className="flex justify-center">
						<button
							onClick={toggleTheme}
							className="bg-transparent border-0 text-[var(--text-muted)] text-lg cursor-pointer p-2 rounded-lg transition-all duration-200 hover:text-[var(--accent)]"
							title="Toggle light/dark"
						>
							<i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
						</button>
					</div>

					{/* Navigation */}
					<nav className="flex-1">
						<ul className="list-none p-0 m-0 flex flex-col gap-1">
							{navigation.map((item) => (
								<li key={item.id}>
									<a
										href={item.href}
										onClick={(e) => {
											e.preventDefault();
											scrollToSection(item.href);
										}}
										className={`flex gap-2 items-center p-2 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-[var(--hover-bg)] hover:text-[var(--accent)] ${activeSection === item.id
											? 'bg-[var(--hover-bg)] text-[var(--accent)] border-l-3 border-[var(--accent)]'
											: 'text-[var(--text-primary)]'
											}`}
									>
										<i className={`fa-solid ${item.icon} w-4 text-center ${activeSection === item.id ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}`}></i>
										<span>{item.label}</span>
									</a>
								</li>
							))}
						</ul>
					</nav>

					{/* Social Links */}
					<div className="flex justify-center gap-3 mt-auto pb-3">
						{socialLinks.map((social, index) => (
							<a
								key={index}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-[var(--text-muted)] text-lg transition-all duration-200 hover:text-[var(--accent)]"
								title={social.title}
							>
								<i className={`${social.icon === 'fa-envelope' ? 'fa-solid' : 'fa-brands'} ${social.icon}`}></i>
							</a>
						))}
					</div>
				</div>
			</aside>
		</>
	);
}