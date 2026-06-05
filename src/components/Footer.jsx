import React from 'react'
import { ajayData } from "../data/ajayData";

import { Github, Linkedin } from 'lucide-react'

export const Footer = () => {
  return (
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
  )
}

