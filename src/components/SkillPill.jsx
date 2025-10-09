import React from "react";

export const SkillPill = ({ skill }) => (
    <span className="inline-block bg-indigo-600/70 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md hover:bg-indigo-500 transition-colors duration-300 m-1">
        {skill}
    </span>
);
