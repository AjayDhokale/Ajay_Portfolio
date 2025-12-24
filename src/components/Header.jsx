import React from "react";
import { Sun, Moon } from "lucide-react";
import { ajayData } from "../data/ajayData";

import { ScrollLink } from "./index";
export const Header = ({ isDarkMode, toggleDarkMode }) => {
    const navItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <header className="fixed w-full z-20 bg-gray-900/90 backdrop-blur-md shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="#hero" className="font-extrabold text-2xl text-indigo-400 tracking-wider">
                        {ajayData.name.split(" ")[0]}<span className="text-white">.dev</span>
                    </a>

                    <div className="hidden md:flex space-x-4">
                        {navItems.map((item) => (
                            <ScrollLink key={item.id} to={item.id}>
                                {item.label}
                            </ScrollLink>
                        ))}
                    </div>

                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors duration-300"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
        </header>
    );
};
