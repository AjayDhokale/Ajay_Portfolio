import { Code } from 'lucide-react'
import React from 'react'
import { ajayData } from "../data/ajayData";


import { SkillPill } from '../components'

export const Skill = ({textColor,iconColor}) => {
    return (
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
    )
}

