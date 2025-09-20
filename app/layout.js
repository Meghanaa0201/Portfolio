import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Meghana A - Portfolio | Full Stack Developer & AI Enthusiast',
  description: 'Final Year Computer Science student specializing in AI, Data Science, Cloud Computing and Full Stack Development. Passionate about building data-driven solutions.',
  keywords: 'Full Stack Developer, AI, Machine Learning, Data Science, Cloud Computing, React, Node.js, Python',
  authors: [{ name: 'Meghana A' }],
  openGraph: {
    title: 'Meghana A - Portfolio',
    description: 'Full Stack Developer & AI Enthusiast',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/5228fbf5e2.js" crossOrigin="anonymous"></script>
      </head>
      <body className={`${inter.className} theme-dark overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}