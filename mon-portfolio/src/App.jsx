import React, { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
import FlorianFace from "./assets/florian_face.jpeg";
import FlorianAbout from "./assets/florian.png";
import { ReactTyped } from "react-typed";  






// Reusable UI components
function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScroll((scrolled / height) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[99]">
      <div className="h-full bg-purple-600 transition-all duration-200" style={{ width: `${scroll}%` }}></div>
    </div>
  );
}

function MobileMenu({ isOpen, toggle }) {
  return (
    <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center text-xl space-y-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <a onClick={toggle} href="#home">Home</a>
      <a onClick={toggle} href="#skills">Compétences</a>
      <a onClick={toggle} href="#about">À propos</a>
      <a onClick={toggle} href="#experience">Expérience</a>
      <a onClick={toggle} href="#education">Formation</a>
      <a onClick={toggle} href="#projects">Projets</a>
      <a onClick={toggle} href="#languages">Langues</a>
      <a onClick={toggle} href="#contact">Contact</a>
    </div>
  );
}


const ProjectCard = ({ name }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-gradient-to-r from-white to-purple-50 p-5 rounded-xl shadow hover:shadow-xl transition-all"
  >
    <p className="text-gray-800 font-medium text-center">{name}</p>
  </motion.div>
);


const LanguageBadge = ({ label }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-4 rounded-full shadow text-center"
  >
    <span className="text-gray-700 font-medium text-sm">{label}</span>
  </motion.div>
);

// App principale
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  

  const links = [
    { label: "Home", target: "home" },
    { label: "Compétences", target: "skills" },
    { label: "À propos", target: "about" },
    { label: "Expérience", target: "experience" },
    { label: "Formation", target: "education" },
    { label: "Projets", target: "projects" },
    { label: "Langues", target: "languages" },
    { label: "Contact", target: "contact" },
  ];
  
  return (
    <div className="font-sans bg-gradient-to-br from-white to-gray-100 min-h-screen">
      <ScrollProgressBar />
      <MobileMenu isOpen={menuOpen} toggle={toggleMenu} />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md">
  <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-purple-700">Florian Beyen</h1>
    <nav className="hidden md:flex space-x-4">
  {links.map(({ label, target }, i) => (
    <a
      key={i}
      href={`#${target}`}
      className="relative px-4 py-2 font-medium text-gray-800 group"
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 bg-purple-600 rounded-lg scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0"></span>
    </a>
  ))}
</nav>

  </div>
</header>





      {/* Hero */}
      <motion.section
  id="home"
  className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 pt-32 pb-16 md:pt-40 md:pb-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white min-h-screen"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>

  {/* Blobs */}
  <div className="absolute w-72 h-72 bg-purple-400 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-pulse top-20 left-20 z-0" />
  <div className="absolute w-96 h-96 bg-pink-500 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-ping bottom-0 right-20 z-0" />

  {/* Texte Hero */}
  <div className="max-w-2xl z-10 text-left md:pl-24">
    <h1 className="text-5xl font-extrabold mb-6 leading-tight">
      Hey, je suis Florian<br />
      <span className="text-3xl">
        <ReactTyped
          strings={[
            "Je crée des applications.",
            "Je conçois des interfaces modernes.",
            "Je développe des solutions performantes.",
          ]}
          typeSpeed={40}
          backSpeed={30}
          loop
        />
      </span>
    </h1>
    


    <p className="mb-6 text-lg">
      Ingénieur informatique passionné par le design produit, l’UX/UI, et le développement web & mobile.
    </p>
    <div className="mt-8 bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-4 w-fit text-white">
  <div className="text-lg md:text-xl font-semibold">
    Disponible pour une offre d'emploi à partir de Septembre 2025.
  </div>
  <a href="/cv.pdf" download>
    <Button className="ml-0 w-full md:w-auto">📄 Télécharger le CV</Button>
  </a>
</div>



  </div>

  <motion.img
    src={FlorianFace}
    alt="Florian Beyen"
    className="rounded-full w-80 h-80 object-cover mt-10 md:mt-0 shadow-lg border-4 border-white z-10"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  />
</motion.section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
  <h2 className="text-4xl font-bold text-center mb-20">🌿 Arbre des Compétences</h2>
  
  <div className="relative max-w-4xl mx-auto">
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-500 rounded-full"></div>

    {[ // chaque "feuille" est une compétence
      { title: "Langages", desc: "Python, Java, C, PHP, JS, Kotlin", side: "left" },
      { title: "Web & Mobile", desc: "HTML, CSS, React, RN, PowerApps", side: "right" },
      { title: "Base de données", desc: "SQL, Firebase, REST API", side: "left" },
      { title: "Outils", desc: "Git, Postman, Power BI", side: "right" },
    ].map((leaf, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, x: leaf.side === "left" ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
        className={`relative w-[calc(50%-2rem)] p-6 rounded-2xl shadow-xl bg-white hover:scale-105 transition-all duration-300 ${
          leaf.side === "left" ? "ml-0 mr-auto text-right" : "ml-auto mr-0 text-left"
        } mb-12`}
      >
        <h3 className="text-xl font-bold text-purple-700">{leaf.title}</h3>
        <p className="text-gray-600">{leaf.desc}</p>
        <span className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 bg-purple-600 rounded-full ${leaf.side === "left" ? "right-[-10px]" : "left-[-10px]"}`}></span>
      </motion.div>
    ))}
  </div>
  <div className="mt-16 max-w-4xl mx-auto px-4">
  <h3 className="text-3xl font-bold mb-6 text-center">🌍 Langues</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      { flag: "🇫🇷", name: "Français", level: "Natif", percent: 100 },
      { flag: "🇬🇧", name: "Anglais", level: "TOEIC 920", percent: 90 },
      { flag: "🇩🇪", name: "Allemand", level: "Limité", percent: 40 },
      { flag: "🇪🇸", name: "Espagnol", level: "Notions", percent: 30 },
    ].map((lang, idx) => (
      <div key={idx} className="bg-white rounded-xl shadow-sm p-4 text-center border">
        <div className="text-2xl">{lang.flag}</div>
        <div className="font-semibold text-purple-700 mt-1">{lang.name}</div>
        <div className="text-xs text-gray-500">{lang.level}</div>
        <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2">
          <div
            className="h-full bg-purple-500 rounded-full"
            style={{ width: `${lang.percent}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>
</div>

</section>




      {/* About */}
      <motion.section
        id="about"
        className="py-20 px-8 bg-gray-50 flex flex-col md:flex-row items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={FlorianAbout}
          alt="Florian Beyen"
          className="rounded-xl w-72 h-72 object-cover mb-8 md:mb-0 md:mr-12 shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
          <p className="text-gray-700 leading-relaxed">
            Diplômé en ingénierie informatique, passionné par les technologies numériques, curieux, autonome et motivé à relever de nouveaux défis. Fort de plusieurs expériences en développement d'applications et projets techniques, je cherche à évoluer dans un environnement stimulant.
          </p>
        </div>
      </motion.section>

      
{/* Timeline Expérience + Formation */}
<section id="timeline" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
  <h2 className="text-4xl font-bold text-center mb-20">🗂️ Parcours</h2>

  <div className="relative max-w-4xl mx-auto">
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-500 rounded-full"></div>

    {[
  {
    type: "pro",
    title: "Développeur d’applications",
    place: "Emerson GRISS SA",
    date: "2024 – 2025",
    items: ["Développement Power Apps", "Digitalisation qualité", "Maintenance corrective"],
    side: "right",
  },
  {
    type: "edu",
    title: "EIL Côte d’Opale",
    place: "Ingénieur Informatique",
    date: "2020 – 2025",
    items: ["Développement fullstack", "Méthodologie Agile", "Gestion de projet"],
    side: "right",
  },
  {
    type: "pro",
    title: "Assistant Ingénieur",
    place: "Emerson GRISS SA",
    date: "2024",
    items: ["Application Power Apps", "Suivi qualité automatisé"],
    side: "left",
  },
  {
    type: "edu",
    title: "Politechnika Opolska",
    place: "Mobilité Erasmus",
    date: "2024",
    items: ["Projets internationaux", "Culture numérique"],
    side: "right",
  },
  {
    type: "pro",
    title: "Développeur Informatique",
    place: "Ascometal",
    date: "2022",
    items: ["Optimisation production", "Outil ligne interne"],
    side: "left",
  },
  {
    type: "edu",
    title: "Lycée Jean Bart",
    place: "Bac Scientifique",
    date: "2017 – 2020",
    items: ["Maths", "Physique", "Spé NSI"],
    side: "left",
  },
].map((entry, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, x: entry.side === "left" ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
        className={`relative w-[calc(50%-2rem)] p-6 rounded-2xl shadow-xl ${
          entry.type === "pro"
            ? "bg-indigo-50 border-l-4 border-indigo-400"
            : "bg-green-50 border-l-4 border-green-400"
        } hover:scale-105 transition-all duration-300 ${
          entry.side === "left" ? "ml-0 mr-auto text-right" : "ml-auto mr-0 text-left"
        } mb-12`}
      >
        <h3 className="text-xl font-bold text-purple-700">{entry.title}</h3>
        <p className="text-sm text-gray-500">{entry.place} — {entry.date}</p>
        <ul className="text-sm mt-2 text-gray-700 space-y-1 list-disc list-inside">
          {entry.items.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <span
          className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 ${
            entry.type === "pro" ? "bg-indigo-500" : "bg-green-500"
          } rounded-full ${entry.side === "left" ? "right-[-10px]" : "left-[-10px]"}`}
        ></span>
      </motion.div>
    ))}
  </div>
</section>

      {/* Projects */}
      <section id="projects" className="py-28 px-6 bg-white">
  <h2 className="text-5xl font-extrabold text-center mb-16 text-purple-800">Projets Personnels</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[
      {
        title: "Distributeur Automatique",
        desc: "Arduino + capteurs pour nourrir un animal. Détection de présence et planification horaire.",
        tech: ["Arduino", "C", "Electronique"],
      },
      {
        title: "E-commerce React",
        desc: "Boutique responsive avec panier, filtres, et intégration d'une API produit.",
        tech: ["React", "Tailwind", "FakeStore API"],
      },
      {
        title: "Tic Tac Toe IA",
        desc: "Jeu de morpion avec intelligence artificielle (Minimax).",
        tech: ["JavaScript", "IA", "Algorithmie"],
      },
      {
        title: "Application Power Apps",
        desc: "Développement pour Emerson : gestion qualité et process internes.",
        tech: ["Power Apps", "Dataverse", "UX"],
      },
      {
        title: "Culture Géo Kotlin",
        desc: "Application Android avec quiz interactifs et système de progression.",
        tech: ["Kotlin", "Jetpack Compose", "SQLite"],
      },
      {
        title: "Dashboard Power BI",
        desc: "Visualisation de données industrielles. Indicateurs dynamiques et KPI qualité.",
        tech: ["Power BI", "SQL", "Excel"],
      },
    ].map((project, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.03 }}
        className="flex flex-col justify-between bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
      >
        <div>
          <h3 className="text-xl font-semibold text-purple-700 mb-2">{project.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{project.desc}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech, t) => (
            <span
              key={t}
              className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* Contact */}
      <section id="contact" className="py-20 px-8 bg-gradient-to-br from-gray-50 to-white">
        <h2 className="text-4xl font-bold mb-10 text-center">Me Contacter</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <input className="p-3 border rounded-lg" placeholder="Prénom" />
          <input className="p-3 border rounded-lg" placeholder="Nom" />
          <input className="p-3 border rounded-lg col-span-2" placeholder="Email" />
          <textarea className="p-3 border rounded-lg col-span-2" rows="5" placeholder="Votre message" />
          <Button className="col-span-2">Envoyer</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center bg-white border-t">
        <p className="text-sm text-gray-500">© 2025 Florian Beyen. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
