# Modern Portfolio Website

A beautiful, responsive, and animated portfolio website built with **Next.js 13+**, **Tailwind CSS**, and modern web technologies. Features smooth animations, theme switching, and a professional design.

## 🚀 Features

### Core Features
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Scroll-triggered animations with intersection observer
- **Theme Toggle**: Dark/Light mode with system preference detection
- **Interactive Elements**: Project modals, certificate viewer, typing animations
- **Performance Optimized**: Image optimization, lazy loading, efficient animations
- **SEO Ready**: Meta tags, semantic HTML, accessibility features

### Design Features
- **Modern UI/UX**: Clean, professional design with subtle animations
- **Color System**: Consistent accent colors (#ff004f) throughout
- **Typography**: Inter font with proper hierarchy and spacing
- **Glass Morphism**: Subtle glass effects and gradients
- **Hover Effects**: Smooth micro-interactions on all interactive elements

## 🛠️ Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter, Poppins)
- **Image Optimization**: Next.js Image component
- **Animations**: CSS transitions, Intersection Observer API
- **Performance**: Built-in Next.js optimizations

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/          # React components
│   │   ├── About.js
│   │   ├── Achievements.js
│   │   ├── Certifications.js
│   │   ├── Contact.js
│   │   ├── Education.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── ProjectModal.js
│   │   ├── Projects.js
│   │   ├── Resume.js
│   │   ├── ScrollProgress.js
│   │   ├── Sidebar.js
│   │   └── Skills.js
│   ├── hooks/              # Custom React hooks
│   │   ├── useInView.js
│   │   ├── useScrollAnimation.js
│   │   └── useTheme.js
│   ├── globals.css         # Global styles and theme variables
│   ├── layout.js           # Root layout component
│   └── page.js            # Main page component
├── public/                 # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `app/components/Hero.js` - Name, roles, description
- `app/components/About.js` - About content and career objective
- `app/components/Contact.js` - Contact information and social links
- `app/components/Sidebar.js` - Profile photo and social links

### Projects
Edit `app/components/Projects.js` to add your projects:
```javascript
const projectsData = [
  {
    id: 'project-1',
    title: 'Your Project Title',
    short: 'Brief description',
    desc: 'Detailed description',
    tech: ['React', 'Node.js', 'MongoDB'],
    images: ['image1.jpg', 'image2.jpg'],
    github: 'https://github.com/username/repo',
    demo: 'https://your-demo-url.com'
  }
];
```

### Skills
Update `app/components/Skills.js` with your skills:
```javascript
const skillsData = [
  {
    icon: 'fa-code',
    title: 'Programming',
    description: 'Your programming languages'
  }
];
```

### Colors and Styling
Modify colors in `app/globals.css`:
```css
:root {
  --accent: #ff004f; /* Main accent color */
  --highlight-text-color: #FF007F; /* Highlight color */
}
```

### Images
- Replace placeholder images with your actual photos
- Use optimized images (WebP format recommended)
- Ensure proper aspect ratios for best display

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Mobile Features
- Collapsible sidebar navigation
- Touch-friendly interactions
- Optimized layouts for smaller screens
- Swipe gestures for project gallery

## ⚡ Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting by Next.js
- **Font Optimization**: Google Fonts with display=swap
- **Bundle Analysis**: Built-in Next.js bundle analyzer
- **Static Generation**: Pre-rendered pages for better performance

## 🔧 Configuration

### Next.js Configuration
```javascript
// next.config.js
const nextConfig = {
  output: 'export', // For static export
  images: { unoptimized: true }, // For static hosting
  eslint: { ignoreDuringBuilds: true }
};
```

### Tailwind Configuration
Custom configurations in `tailwind.config.ts` for:
- Color palette
- Custom animations
- Responsive breakpoints
- Component styles

## 🚀 Deployment

### Static Export (Recommended)
```bash
npm run build
```
This creates an `out` folder with static files that can be deployed anywhere.

### Deployment Platforms
- **Netlify**: Drag and drop the `out` folder
- **Vercel**: Connect GitHub repository for automatic deployments  
- **GitHub Pages**: Enable GitHub Pages and upload static files
- **AWS S3**: Upload static files to S3 bucket

## 🧪 Testing

### Development Testing
- Test all animations and interactions
- Verify responsive design on different screen sizes
- Check theme switching functionality
- Test keyboard navigation and accessibility

### Performance Testing
- Use Lighthouse for performance audits
- Test loading speeds on different networks
- Verify image optimization
- Check Core Web Vitals

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, questions, or suggestions:
- Create an issue on GitHub
- Contact: [meghanaa1315@gmail.com]

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio designs and Apple-level aesthetics
- **Icons**: Font Awesome
- **Fonts**: Google Fonts
- **Images**: Pexels (for placeholder images)
- **Framework**: Next.js team for excellent developer experience

---

**Built with ❤️ using Next.js and Tailwind CSS**
