import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { ajayData } from "../data/ajayData";


import { ScrollLink } from "../components";


export const Hero = ({ iconColor, textColor, subTextColor }) => (
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
                <a href={ajayData.github} target="_blank" rel="noopener noreferrer"
                    className={`p-3 rounded-full border border-indigo-400 ${iconColor} hover:bg-indigo-600 hover:text-white transition duration-300`}>
                    <Github size={24} />
                </a>
                <a href={ajayData.linkedin} target="_blank" rel="noopener noreferrer"
                    className={`p-3 rounded-full border border-indigo-400 ${iconColor} hover:bg-indigo-600 hover:text-white transition duration-300`}>
                    <Linkedin size={24} />
                </a>
                <ScrollLink to="contact">
                    <button className="flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-xl hover:bg-indigo-700 transition duration-300">
                        <Mail size={20} className="mr-2" /> Get in Touch
                    </button>
                </ScrollLink>
            </div>
        </div>
    </section>
);
