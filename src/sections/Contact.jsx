import { Mail, Phone } from 'lucide-react'
import React from 'react'
import { ajayData } from '../data/ajayData'

export const Contact = ({iconColor, subTextColor}) => {
    return (
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
    )
}

