# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing professional experience, education, skills, and projects.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive layout
- ⚡ Fast and optimized performance
- 🎯 Smooth scrolling navigation
- 💼 Professional sections:
  - Hero/Introduction
  - About Me
  - Education
  - Professional Experience
  - Skills & Technologies
  - Projects Portfolio
  - Contact Form
- 🎭 Smooth animations and transitions
- 🌈 Beautiful gradient backgrounds

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd new-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and description
   - Add your social media links (GitHub, LinkedIn, Email)

2. **About Section** (`src/components/About.jsx`):
   - Update the about me text
   - Modify the highlights section

3. **Education** (`src/components/Education.jsx`):
   - Update education data array with your educational background

4. **Experience** (`src/components/Experience.jsx`):
   - Update experiences array with your work history

5. **Skills** (`src/components/Skills.jsx`):
   - Update skill categories and proficiency levels

6. **Projects** (`src/components/Projects.jsx`):
   - Update projects array with your actual projects
   - Add GitHub and demo links

7. **Contact** (`src/components/Contact.jsx`):
   - Update contact information (email, phone, location)
   - Configure form submission (currently uses console.log)

8. **Navbar & Footer**:
   - Update social media links in both components

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind utility classes

### Contact Form Setup (EmailJS)

The contact form uses EmailJS to send emails. Follow these steps to set it up:

1. **Sign up for EmailJS** (free tier available):
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Create an account and verify your email

2. **Create an Email Service**:
   - Go to "Email Services" in the dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - Copy your **Service ID**

3. **Create an Email Template**:
   - Go to "Email Templates" in the dashboard
   - Click "Create New Template"
   - Use these template variables:
     - `{{name}}` - Sender's name
     - `{{email}}` - Sender's email
     - `{{message}}` - Message content
   - Set the "To Email" to your email address (e.g., businessrohit70@gmail.com)
   - Set the "From Name" to `{{name}}`
   - Set the "Reply To" to `{{email}}`
   - Save the template and copy your **Template ID**

4. **Get your Public Key**:
   - Go to "Account" → "General"
   - Copy your **Public Key**

5. **Configure Environment Variables**:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and replace the placeholder values:
     ```
     VITE_EMAILJS_SERVICE_ID=your_actual_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
     ```

6. **Restart the development server**:
   ```bash
   npm run dev
   ```

The contact form will now send emails directly to your inbox when users submit the form!

## Project Structure

```
new-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on GitHub or contact me directly.

---

Built with ❤️ using React and Tailwind CSS

