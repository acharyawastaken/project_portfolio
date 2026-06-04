# Acharya's Portfolio 🚀

> "AI Engineer · Full-Stack Developer · Automation Builder"
> *(And occasional writer of code that works on the first try without intense Googling. Just kidding, that's a myth.)*

Welcome to the source code of my personal portfolio website! This project is a showcase of my skills, projects, and the services I offer. It's built with a focus on modern design, interactivity, and a healthy dose of developer sarcasm.

## 🌟 Features (aka Things I Spent Too Much Time On)

- **Immersive UI/UX**: Custom magnetic cursor. *Because standard pointers are just too mainstream and I wanted you to feel like you're fighting for control of your mouse.*
- **3D Splash Screen**: A custom 3D box loader animation. *Because a simple 'Loading...' text doesn't sufficiently mask how long the assets take to load.*
- **Dynamic Content Rendering**: Skills, projects, and services are dynamically injected via JavaScript. *Because writing HTML by hand in 2026 feels like churning my own butter.*
- **Interactive Project Showcase**: Filter projects by domain (Full Stack, AI, Data Science). *Because dumping them all on one page would expose how many are still just 'TODOs'.*
- **Contact Integration**: Fully functional contact form built with EmailJS. *Because setting up a real backend for an email form sounded too much like actual work.*
- **Responsive Design**: *Looks great on desktop. It also works on mobile, provided you hold your phone at exactly the right angle.*

## 🛠️ Tech Stack

This project is built using vanilla web technologies to keep it lightweight. *Read: I didn't want to run `npm install` and wait 5 years for `node_modules` to download.*

- **HTML5**: Semantic structure. *Div soup, but with artisanal, locally-sourced semantic tags.*
- **CSS3**: Custom styling and Flexbox/Grid layouts. *Center a div? Please, I just add `display: flex; justify-content: center; align-items: center;` to everything until it works.*
- **JavaScript (ES6+)**: DOM manipulation and dynamic rendering. *Because why use a framework when you can reinvent the wheel with `document.getElementById`?*
- **GSAP (GreenSock)**: Used for high-performance animations. *Because my custom CSS keyframes were looking like a slideshow.*
- **EmailJS**: *Letting someone else handle the server-side validation so I don't have to.*

## 📂 Project Structure

```text
project_portfolio/
├── html/
│   ├── index.html       # Where the magic (and messy DOM) happens
│   └── contact.html     # The "Please hire me" form
├── css/
│   └── style.css        # 1000 lines of CSS I'm too afraid to touch
├── js/
│   ├── script.js        # The duct tape holding this site together
│   └── contact.js       # The script that pretends I have a backend
├── assets/              # Images, videos, and stolen SVGs
└── README.md            # The document you're reading instead of my actual code
```

## 🚀 Getting Started

Since this is a static website, you don't need any complex build tools. *You're welcome.*

1. **Clone the repository:**
   ```bash
   git clone https://github.com/acharyawastaken/project_portfolio.git
   cd project_portfolio
   ```

2. **Run it locally:**
   - You can simply open `html/index.html` in your browser. *Yes, double-clicking a file still works.*
   - Or, if you want to feel like a real hacker, use Python's HTTP server:
     ```bash
     python -m http.server 8000
     ```
     Then navigate to `http://localhost:8000/html/index.html` in your browser.

## 🎨 Customization

If you want to fork this and make it your own (I see you):

- **Colors**: Modify the CSS variables in `style.css`. *If you change everything to neon green, that's on you.*
- **Content**: Update the arrays in `script.js`. *Make sure you come up with your own sarcastic thoughts. Don't steal my trauma.*
- **Contact Form**: Update the EmailJS credentials in `contact.js`. *Otherwise, your potential clients will be emailing me, and I might just take the job.*

## 📫 Connect with me

- **GitHub**: [@acharyawastaken](https://github.com/acharyawastaken) - *Where I hide my messy commits.*
- **LinkedIn**: [in/acharyawastaken](https://www.linkedin.com/in/acharyawastaken/) - *Where I pretend to be a professional.*

---
*Built with ❤️ (and 90% caffeine) by Acharya. If it breaks, clear your cache.*
