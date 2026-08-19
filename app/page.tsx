import Image from "next/image";

const EMAIL = "youremail@example.com"; // <-- replace with your email
const LINKEDIN = "https://www.linkedin.com/in/your-profile"; // <-- replace
const INSTAGRAM = "https://www.instagram.com/your-profile"; // <-- replace
const GITHUB = "https://github.com/Tetenewbie";
const CV_LINK = "/cv.pdf"; // put your CV PDF in the public/ folder as cv.pdf

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans text-zinc-900 dark:text-zinc-50">
      <header className="flex flex-col items-center pt-20 pb-8">
        <p className="text-sm uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
          developer / learner
        </p>
        <h1 className="mt-2 text-center text-4xl sm:text-5xl font-semibold">
          Tete Artur Sanamyan
        </h1>
        <nav className="mt-6">
          <ul className="flex gap-3 rounded-full bg-white/60 dark:bg-black/60 p-1 shadow-sm">
            <li>
              <a
                href="#learning"
                className="block px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Learning
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href={CV_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                CV
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-24">
        <section id="learning" className="mt-12">
          <h2 className="text-2xl font-semibold">Learning & Technologies</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Technologies I use / am learning — a short list based on this project.
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            <li className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm">TypeScript</li>
            <li className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-sm">JavaScript</li>
            <li className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-sm">CSS / Tailwind</li>
            <li className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-sm">React</li>
            <li className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-sm">Next.js</li>
            <li className="px-3 py-1 rounded-full bg-zinc-50 text-zinc-700 text-sm">Vercel</li>
          </ul>
        </section>

        <section id="projects" className="mt-12">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            See my projects and repositories on GitHub.
          </p>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 rounded-md bg-foreground/90 text-background px-4 py-2 text-sm font-medium hover:opacity-95"
          >
            View my GitHub
          </a>
        </section>

        <section id="contact" className="mt-12">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">You can reach me by email or via social media:</p>

          <div className="mt-4 space-y-2">
            <a href={`mailto:${EMAIL}`} className="text-sm text-indigo-700 underline">
              {EMAIL}
            </a>

            <div className="flex gap-4 mt-2">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-700 hover:underline">
                LinkedIn
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-700 hover:underline">
                Instagram
              </a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-700 hover:underline">
                GitHub
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-20 border-t pt-6 text-center text-sm text-zinc-500">© {new Date().getFullYear()} Tete Artur Sanamyan</footer>
      </main>
    </div>
  );
}
