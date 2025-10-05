import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Code, GraduationCap, Mail, Github, Linkedin, Sun, Moon, Link, Phone, ExternalLink } from 'lucide-react';

// --- Portfolio Data based on Resume ---
const ajayData = {
    name: "Ajay Dhokale",
    title: "MERN Stack Developer",
    phone: "+91 70209 90524",
    email: "ajaydhokale1508@gmail.com",
    linkedin: "https://www.linkedin.com/in/ajay-dhokale/",
    github: "https://github.com/AjayDhokale",
    objective: "Aspiring MERN Stack Developer passionate about building dynamic, responsive, and user-friendly web applications. Proficient in modern JavaScript frameworks with strong foundations in **React**, **Node.js**, and databases. Recently completed a comprehensive MERN Stack course from TechRel Institute, seeking opportunities to contribute to real-world projects and grow as a full-stack developer.",
    skills: {
        frontend: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React"],
        backend: ["Node.js", "Express.js"],
        databases: ["MongoDB", "MySQL"],
        tools: ["Git", "GitHub", "VS Code"],
        concepts: ["RESTful APIs", "Responsive Design", "SPA"]
    },
    projects: [
        {
            title: "Google Gemini Clone",
            description: "Developed an AI chat assistant clone using React, Node.js, and AI APIs to simulate chat-based AI interactions.",
            tech: ["React", "Node.js", "AI APIs"],
            link: "#" // Placeholder for Live Demo/GitHub link
        },
        {
            title: "Todo List App (React)",
            description: "Created a single-page task manager app with CRUD operations, state management, and responsive design.",
            tech: ["React", "CRUD", "State Management"],
            link: "https://ajaydhokale-todo-app.netlify.app/" // Placeholder for Live Demo/GitHub link
        },
        {
            title: "50+ Mini Web Projects",
            description: "Built over 50 small projects using HTML, CSS, and JavaScript to strengthen core web development skills.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://ajaydhokale.github.io/All-Projects/" // Placeholder for Live Demo/GitHub link
        }
    ],
    experience: [
        {
            title: "Web Development Intern",
            company: "Revolution IT Solution, Kolhapur",
            duration: "Jul 2023 - Aug 2023",
            details: [
                "Gained hands-on experience in frontend web development.",
                "Designed responsive UI using HTML, CSS, and JavaScript.",
                "Collaborated with team members to improve UX and performance."
            ]
        }
    ],
    education: [
        {
            type: "B.Tech",
            degree: "Bachelor of Technology (Information Technology)",
            institution: "Dr. J. J. Magdum College of Engineering",
            duration: "2021 - 2024",
            grade: "73.99%"
        },
        {
            type: "Diploma",
            degree: "Diploma (Information Technology)",
            institution: "Sharad Institute of Technology Polytechnic",
            duration: "2018 - 2021",
            grade: "86.88%"
        }
    ],
    certifications: [
        "MERN Stack Development Course - TechRel Institute (Nov 2024-Jun 2025)",
        "Web Development - Stromsofts Technology (2023)",
        "Innovating with ChatGPT - Mirasung Technologies"
    ]
};

// Utility component for smooth scrolling navigation
const ScrollLink = ({ to, children }) => {
    const handleClick = (e) => {
        e.preventDefault();
        const element = document.getElementById(to);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <a 
            href={`#${to}`} 
            onClick={handleClick}
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
        >
            {children}
        </a>
    );
};

// Component for displaying a skill
const SkillPill = ({ skill }) => (
    <span className="inline-block bg-indigo-600/70 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md hover:bg-indigo-500 transition-colors duration-300 m-1">
        {skill}
    </span>
);

// Component for a Project Card
const ProjectCard = ({ project }) => (
    <div className="bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700 hover:border-indigo-500 transition duration-300 transform hover:scale-[1.02] flex flex-col h-full">
        <h3 className="text-2xl font-bold text-indigo-400 mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap mb-4">
            {project.tech.map(tech => (
                <SkillPill key={tech} skill={tech} />
            ))}
        </div>

        <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center mt-auto w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-600/50"
        >
            View Project <ExternalLink size={16} className="ml-2" />
        </a>
    </div>
);


// Main App Component
const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
    const headerRef = useRef(null);

    // Apply dark/light class to body
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
        document.body.className = isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900';
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' }
    ];

    const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
    const subTextColor = isDarkMode ? 'text-gray-400' : 'text-gray-600';
    const iconColor = isDarkMode ? 'text-indigo-400' : 'text-indigo-600';

    // --- Component for Navigation/Header ---
    const Header = () => (
        <header ref={headerRef} className="fixed w-full z-20 bg-gray-900/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="#hero" className="flex-shrink-0 font-extrabold text-2xl text-indigo-400 tracking-wider">
                        {ajayData.name.split(' ')[0]}<span className="text-white">.dev</span>
                    </a>
                    
                    <div className="hidden md:flex space-x-4">
                        {navItems.map(item => (
                            <ScrollLink key={item.id} to={item.id}>{item.label}</ScrollLink>
                        ))}
                    </div>
                    
                    <button 
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors duration-300"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
        </header>
    );

    // --- Component for Hero/About Section ---
    const Hero = () => (
        <section id="hero" className="min-h-screen pt-24 pb-12 flex items-center justify-center text-center">
            <div className="max-w-4xl mx-auto px-4">
                <p className={`text-xl font-semibold mb-3 ${iconColor}`}>HELLO, I'M</p>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-teal-400 leading-tight">
                    {ajayData.name}
                </h1>
                <h2 className={`text-3xl sm:text-4xl font-medium mb-8 ${textColor}`}>{ajayData.title}</h2>
                <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-10 ${subTextColor}`}>
                    {ajayData.objective}
                </p>
                <div className="flex justify-center space-x-6">
                    <a 
                        href={ajayData.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`p-3 rounded-full border border-indigo-400 ${iconColor} hover:bg-indigo-600 hover:text-white transition duration-300`}
                        aria-label="GitHub Profile"
                    >
                        <Github size={24} />
                    </a>
                    <a 
                        href={ajayData.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`p-3 rounded-full border border-indigo-400 ${iconColor} hover:bg-indigo-600 hover:text-white transition duration-300`}
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin size={24} />
                    </a>
                    <ScrollLink 
                        to="contact"
                        className="flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-xl hover:bg-indigo-700 transition duration-300"
                    >
                        <Mail size={20} className="mr-2" /> Get in Touch
                    </ScrollLink>
                </div>
            </div>
        </section>
    );

    // --- Component for Skills Section ---
    const Skills = () => (
        <section id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-4xl font-bold text-center mb-12 ${iconColor}`}>
                <Code size={30} className="inline mr-3" /> Technical Skills
            </h2>
            <div className="space-y-10">
                {Object.entries(ajayData.skills).map(([category, skills]) => (
                    <div key={category} className="bg-gray-800 p-6 rounded-xl shadow-2xl">
                        <h3 className={`text-2xl font-semibold mb-4 capitalize ${textColor}`}>{category.replace('_', ' ')}</h3>
                        <div className="flex flex-wrap">
                            {skills.map(skill => (
                                <SkillPill key={skill} skill={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );

    // --- Component for Projects Section ---
    const Projects = () => (
        <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-4xl font-bold text-center mb-12 ${iconColor}`}>
                <Link size={30} className="inline mr-3" /> Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ajayData.projects.map(project => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );

    // --- Component for Experience & Education Section ---
    const ExperienceEducation = () => (
        <section id="experience" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* Experience Column */}
                <div>
                    <h2 className={`text-4xl font-bold mb-12 ${iconColor}`}>
                        <Briefcase size={30} className="inline mr-3" /> Experience
                    </h2>
                    {ajayData.experience.map((exp, index) => (
                        <div key={index} className="mb-8 border-l-4 border-indigo-600 pl-4">
                            <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                            <p className="text-xl font-medium text-indigo-400">{exp.company}</p>
                            <p className="text-sm italic text-gray-500 mb-3">{exp.duration}</p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                {exp.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Education & Certifications Column */}
                <div>
                    <h2 className={`text-4xl font-bold mb-12 ${iconColor}`}>
                        <GraduationCap size={30} className="inline mr-3" /> Education & Certifications
                    </h2>
                    
                    {/* Education */}
                    <div className="mb-10">
                        <h3 className="text-3xl font-bold text-white mb-6">Education</h3>
                        {ajayData.education.map((edu, index) => (
                            <div key={index} className="mb-4 p-4 rounded-lg bg-gray-800/50">
                                <p className="text-xl font-semibold text-indigo-400">{edu.degree}</p>
                                <p className="text-lg text-white">{edu.institution}</p>
                                <p className="text-sm italic text-gray-500 flex justify-between">
                                    <span>{edu.duration}</span>
                                    <span>Grade: {edu.grade}</span>
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-6">Certifications</h3>
                        <ul className="space-y-3 text-gray-300">
                            {ajayData.certifications.map((cert, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="w-5 h-5 mr-3 text-teal-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );

    // --- Component for Contact Section ---
    const Contact = () => (
        <section id="contact" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`text-4xl font-bold mb-12 ${iconColor}`}>
                <Mail size={30} className="inline mr-3" /> Contact Me
            </h2>
            <p className={`text-xl mb-8 ${subTextColor}`}>
                I'm actively looking for full-stack opportunities. Feel free to connect or send me an email about job opportunities, collaborations, or just to say hi!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <a 
                    href={`mailto:${ajayData.email}`} 
                    className="flex items-center justify-center p-4 rounded-xl bg-gray-800 hover:bg-indigo-600 transition duration-300 shadow-xl"
                >
                    <Mail size={24} className="mr-3 text-teal-400" />
                    <span className="text-white font-semibold">{ajayData.email}</span>
                </a>
                <a 
                    href={`tel:${ajayData.phone.replace(/ /g, '')}`} 
                    className="flex items-center justify-center p-4 rounded-xl bg-gray-800 hover:bg-indigo-600 transition duration-300 shadow-xl"
                >
                    <Phone size={24} className="mr-3 text-teal-400" />
                    <span className="text-white font-semibold">{ajayData.phone}</span>
                </a>
            </div>
            
        </section>
    );

    // --- Component for Footer ---
    const Footer = () => (
        <footer className="bg-gray-800 mt-10 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Ajay Dhokale. Built with React and Tailwind CSS.</p>
                <div className="flex justify-center space-x-4 mt-3">
                    <a href={ajayData.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors duration-300" aria-label="GitHub">
                        <Github size={20} />
                    </a>
                    <a href={ajayData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors duration-300" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );

    return (
        <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-100'} font-inter`}>
            {/* Tailwind script is assumed to be available or linked in the root HTML file */}
            <style>
                {`
                html.dark { color-scheme: dark; }
                /* Custom font if available, otherwise fallback */
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
                .font-inter {
                    font-family: 'Inter', sans-serif;
                }
                `}
            </style>
            <Header />
            <main>
                <Hero />
                <div className="bg-gray-800/50 pt-10 pb-20">
                    <Skills />
                </div>
                <Projects />
                <ExperienceEducation />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
