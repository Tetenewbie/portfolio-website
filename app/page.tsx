"use client";

import { useState } from "react";
import Image from "next/image";

const EMAIL = "youremail@example.com"; 
const LINKEDIN = "https://www.linkedin.com/in/your-profile"; 
const INSTAGRAM = "https://www.instagram.com/your-profile"; 
const GITHUB = "https://github.com/Tetenewbie";
const CV_LINK = "/cv.pdf"; 

export default function Home() {
  // This state remembers which tab is clicked. We set "learning" as the default so it's not empty when they load the page!
  const [activeTab, setActiveTab] = useState<string | null>("learning");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans text-zinc-900 dark:text-zinc-50 flex flex-col justify-between">
      
      <div>
        <header className="flex flex-col items-center pt-20 pb-8">
          <p className="text-sm uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
            developer / learner
          </p>
          <h1 className="mt-2 text-center text-4xl sm:text-5xl font-semibold">
            Tete Artur Sanamyan
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
                {/* CV stays as a direct download link so it opens immediately */}
                <a
                  href={CV_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  CV
                </a>
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
                Technologies I use / am learning — a short list based on this project.
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                <li className="px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium border border-indigo-100 dark:border-indigo-800">TypeScript</li>
                <li className="px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-medium border border-amber-100 dark:border-amber-800">JavaScript</li>
                <li className="px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium border border-cyan-100 dark:border-cyan-800">CSS / Tailwind</li>
                <li className="px-4 py-2 rounded-full bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm font-medium border border-sky-100 dark:border-sky-800">React</li>
                <li className="px-4 py-2 rounded-full bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-sm font-medium border border-rose-100 dark:border-rose-800">Next.js</li>
                <li className="px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium border border-zinc-200 dark:border-zinc-700">Vercel</li>
              </ul>
            </section>
          )}

          {/* 2. PROJECTS TAB */}
          {activeTab === "projects" && (
            <section className="animate-fade-in">
              <h2 className="text-2xl font-semibold">Projects</h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                See my projects and repositories on GitHub.
              </p>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View my GitHub →
              </a>
            </section>
          )}

          {/* 3. CONTACT TAB */}
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