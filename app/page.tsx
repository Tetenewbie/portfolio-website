"use client";

import { useState } from "react";

const EMAIL = "artursanamyan93@gmail.com"; 
const LINKEDIN = "https://www.linkedin.com/in/artur-sanamyan-295850303/"
const INSTAGRAM = "https://www.instagram.com/tt_67_76?igsi=ZWZhY2lpYzRnOHlu&utm_source=qr"; 
const GITHUB = "https://github.com/Tetenewbie";
const CV_ENGLISH = "/cv_english.pdf"; 
const CV_GERMAN = "/cv.pdf"; 

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>("learning");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans text-zinc-900 dark:text-zinc-50 flex flex-col justify-between">
      
      <div>
        <header className="flex flex-col items-center pt-20 pb-8">
          <p className="text-sm uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
            developer / learner
          </p>
          <h1 className="mt-2 text-center text-4xl sm:text-5xl font-semibold">
             Artur Tete Sanamyan
          </h1>
          
          {/* --- TAB NAVIGATION --- */}
          <nav className="mt-8">
            <ul className="flex flex-wrap justify-center gap-3 rounded-full bg-white/60 dark:bg-zinc-900/60 p-2 shadow-sm border border-zinc-200 dark:border-zinc-800">
              <li>
                <button
                  onClick={() => setActiveTab("learning")}
                  className={`block px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === "learning" ? "bg-zinc-200 dark:bg-zinc-800" : "hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                  }`}
                >
                  Learning
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("projects")}
                  className={`block px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === "projects" ? "bg-zinc-200 dark:bg-zinc-800" : "hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                  }`}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("cv")}
                  className={`block px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === "cv" ? "bg-zinc-200 dark:bg-zinc-800" : "hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                  }`}
                >
                  CV
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("contact")}
                  className={`block px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === "contact" ? "bg-zinc-200 dark:bg-zinc-800" : "hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                  }`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </header>

        {/* --- DYNAMIC TAB CONTENT --- */}
        <main className="max-w-3xl mx-auto px-6 pb-24 mt-8 min-h-[300px] animate-fade-in">
          
          {/* 1. LEARNING TAB */}
          {activeTab === "learning" && (
            <section className="animate-fade-in">
              <h2 className="text-2xl font-semibold">Learning & Technologies</h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Technologies I use / am learning — a short list based on my focus.
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                <li className="px-4 py-2 rounded-full bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm font-medium border border-sky-100 dark:border-sky-800">Python</li>
                <li className="px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium border border-indigo-100 dark:border-indigo-800">Pandas</li>
                <li className="px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-medium border border-amber-100 dark:border-amber-800">PowerBI</li>
                <li className="px-4 py-2 rounded-full bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-sm font-medium border border-rose-100 dark:border-rose-800">Java</li>
                <li className="px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium border border-cyan-100 dark:border-cyan-800">SQL</li>
                <li className="px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium border border-zinc-200 dark:border-zinc-700">C / C++</li>
              </ul>
            </section>
          )}

          {/* 2. PROJECTS TAB */}
          {activeTab === "projects" && (
            <section className="animate-fade-in">
              <h2 className="text-2xl font-semibold">Projects</h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Here are my latest projects. You can view the source code and details on GitHub.
              </p>
              
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Project 1 */}
                <div className="flex flex-col justify-between p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">3D scene for Computer Graphics</h3>
                  <a
                    href="https://github.com/Tetenewbie/Computer-Graphics1_Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    View on GitHub →
                  </a>
                </div>

                {/* Project 2 */}
                <div className="flex flex-col justify-between p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">A beginner ML project</h3>
                  <a
                    href="https://github.com/Tetenewbie/house_price_predictor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    View on GitHub →
                  </a>
                </div>

                {/* Project 3 */}
                <div className="flex flex-col justify-between p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Maze Game in Java</h3>
                  <a
                    href="https://github.com/Tetenewbie/Maze_Game"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    View on GitHub →
                  </a>
                </div>

                {/* Project 4 */}
                <div className="flex flex-col justify-between p-5 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Personal Portfolio Website</h3>
                  <a
                    href="https://github.com/Tetenewbie/portfolio-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    View on GitHub →
                  </a>
                </div>

              </div>
            </section>
          )}

          {/* 3. CV TAB - WITH LANGUAGE SELECTION */}
          {activeTab === "cv" && (
            <section className="animate-fade-in">
              <h2 className="text-2xl font-semibold">Curriculum Vitae</h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Choose your preferred language to view or download my CV.
              </p>
              
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* English CV */}
                <div className="flex flex-col justify-between p-6 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100">📄 English CV</h3>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-2">
                      
                    </p>
                  </div>
                  <a
                    href={CV_ENGLISH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors w-fit"
                  >
                    Open PDF →
                  </a>
                </div>

                {/* German CV */}
                <div className="flex flex-col justify-between p-6 border-2 border-amber-200 dark:border-amber-800 rounded-lg bg-amber-50 dark:bg-amber-900/20 hover:border-amber-400 dark:hover:border-amber-600 transition-colors">
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100">📄 Deutscher Lebenslauf</h3>
                    <p className="text-sm text-amber-700 dark:text-amber-300 mt-2">
                    
                    </p>
                  </div>
                  <a
                    href={CV_GERMAN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium transition-colors w-fit"
                  >
                    PDF öffnen →
                  </a>
                </div>

              </div>
            </section>
          )}

          {/* 4. CONTACT TAB */}
          {activeTab === "contact" && (
            <section className="animate-fade-in">
              <h2 className="text-2xl font-semibold">Contact</h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">You can reach me by email or via social media:</p>

              <div className="mt-6 space-y-4">
                <a href={`mailto:${EMAIL}`} className="text-lg text-indigo-600 dark:text-indigo-400 hover:underline">
                  {EMAIL}
                </a>

                <div className="flex gap-6 mt-4">
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-white transition-colors">
                    Instagram
                  </a>
                  <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-white transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>

      {/* --- FOOTER --- */}
      <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Tete Artur Sanamyan
      </footer>

    </div>
  );
}