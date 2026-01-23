# Soumya Ranjan Nayak - Portfolio Website

A modern, fully responsive personal portfolio website built with React.js, featuring smooth animations, interactive components, and a professional design.

## 🚀 Features

- **Modern UI/UX**: Professional dark theme with gradient accents
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion
- **Interactive Components**: Hover effects, scroll animations, and page transitions
- **Sound Effects**: Subtle audio feedback using Web Audio API
- **Working Contact Form**: Integrated with EmailJS (configuration required)
- **SEO Friendly**: Meta tags and semantic HTML
- **Accessible**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **React.js** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **EmailJS** - Contact form integration
- **Lucide React** - Icon library

## 📦 Installation

1. **Clone the repository** (or navigate to the project directory)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 🔧 Configuration

### EmailJS Setup (Contact Form)

To enable the contact form, you need to configure EmailJS:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Public Key, Service ID, and Template ID
5. Update `src/pages/Contact.jsx` with your credentials:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY')
   
   // In handleSubmit function:
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     { ... },
     'YOUR_PUBLIC_KEY'
   )
   ```

## 📁 Project Structure

```
portfolio-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   └── SoundContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Achievements.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Pages

- **Home**: Hero section with introduction and call-to-action buttons
- **About**: Personal information and education details
- **Skills**: Technical skills organized by category
- **Projects**: Showcase of major projects with descriptions
- **Experience**: Timeline of professional experience
- **Achievements**: Awards, recognitions, and milestones
- **Contact**: Working contact form and contact information

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run `npm run deploy`

## 🎯 Customization

### Personal Information

Update the following files with your information:
- `src/pages/Home.jsx` - Hero section
- `src/pages/About.jsx` - About content and education
- `src/pages/Skills.jsx` - Skills and technologies
- `src/pages/Projects.jsx` - Project details
- `src/pages/Experience.jsx` - Work experience
- `src/pages/Achievements.jsx` - Achievements
- `src/components/Footer.jsx` - Social links and contact info

### Colors and Styling

Modify `tailwind.config.js` to customize the color palette and theme.

### Sound Effects

Sound effects can be toggled or customized in `src/context/SoundContext.jsx`.

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Soumya Ranjan Nayak**
- Email: soumyaranjannayak405@gmail.com
- LinkedIn: [soumya-ranjan-nayak-7461552b9](https://linkedin.com/in/soumya-ranjan-nayak-7461552b9)
- GitHub: [Mysteriousboy727](https://github.com/Mysteriousboy727)

---

Made  using React.js and Framer Motion


