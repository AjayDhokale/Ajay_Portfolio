
import { Link } from 'lucide-react'
import React from 'react'
import { ajayData } from '../data/ajayData'
import { ProjectCard } from '../components'

export const Projects = ({iconColor}) => {
  return (
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
  )
}
