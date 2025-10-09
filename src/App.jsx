import React, { useState, useEffect } from "react";

import { Footer, Header, ExperienceEducation } from "./components/";
import { Contact, Hero, Projects, Skill } from "./sections";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.body.className = isDarkMode
      ? "bg-gray-900 text-white"
      : "bg-gray-100 text-gray-900";
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const subTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const iconColor = isDarkMode ? "text-indigo-400" : "text-indigo-600";

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "dark bg-gray-900" : "bg-gray-100"
      } font-inter`}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero
          iconColor={iconColor}
          textColor={textColor}
          subTextColor={subTextColor}
        />
        <div className="bg-gray-800/50 pt-10 pb-20">
          <Skill textColor={textColor} iconColor={iconColor} />
        </div>
        <Projects iconColor={iconColor} />
        <ExperienceEducation iconColor={iconColor} />
        <Contact iconColor={iconColor} subTextColor={subTextColor} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
