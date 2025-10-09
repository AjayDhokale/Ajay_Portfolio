import React from "react";
import { ajayData } from "../data/ajayData";
import { Briefcase, GraduationCap } from "lucide-react";

export const ExperienceEducation = ({ iconColor }) => {
  return (
    <section
      id="experience"
      className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Experience Column */}
        <div>
          <h2 className={`text-4xl font-bold mb-12 ${iconColor}`}>
            <Briefcase size={30} className="inline mr-3" /> Experience
          </h2>
          {ajayData.experience.map((exp, index) => (
            <div key={index} className="mb-8 border-l-4 border-indigo-600 pl-4">
              <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
              <p className="text-xl font-medium text-indigo-400">
                {exp.company}
              </p>
              <p className="text-sm italic text-gray-500 mb-3">
                {exp.duration}
              </p>
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
            <GraduationCap size={30} className="inline mr-3" /> Education &
            Certifications
          </h2>

          {/* Education */}
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-white mb-6">Education</h3>
            {ajayData.education.map((edu, index) => (
              <div key={index} className="mb-4 p-4 rounded-lg bg-gray-800/50">
                <p className="text-xl font-semibold text-indigo-400">
                  {edu.degree}
                </p>
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
            <h3 className="text-3xl font-bold text-white mb-6">
              Certifications
            </h3>
            <ul className="space-y-3 text-gray-300">
              {ajayData.certifications.map((cert, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-3 text-teal-400 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
