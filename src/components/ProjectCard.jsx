import React from "react";
import { ExternalLink } from "lucide-react";
import {SkillPill} from "./index";

export const ProjectCard = ({ project }) => (
    <div className="bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700 hover:border-indigo-500 transition duration-300 transform hover:scale-[1.02] flex flex-col h-full">
        <h3 className="text-2xl font-bold text-indigo-400 mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

        <div className="flex flex-wrap mb-4">
            {project.tech.map((tech) => (
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
