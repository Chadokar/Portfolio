import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Chadgit",
    description: "This is my own version control system using typescript",
    image:
      // "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      "./chadgit.gif",
    github: "https://github.com/Chadokar/chadgit",
    live: "https://github.com/Chadokar/chadgit",
    tags: ["TypeScript", "Node.js", "CLI", "Tree"],
  },
  {
    title: "PDFChatBot",
    description: "Real-time chat application with AI-powered responses",
    image:
      // "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
      "./pdf chatbot.gif",
    github: "https://github.com/Chadokar/ChatbotPDF",
    live: "https://youtu.be/YcenhpSeKzs",
    tags: ["React", "FastAPI", "RAG", "LangChain", "Docker"],
  },
  {
    title: "Portfolio Website",
    description: "3D animated portfolio built with React and Three.js",
    image:
      // "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "/image.png",
    github: "https://github.com/Chadokar/portfolio",
    live: "https://shubham-chadokar.vercel.app/",
    tags: ["React", "gsap", "Framer Motion"],
  },
  {
    title: "UTbmanager",
    description: "Platform for YouTube creators to manage their videos",
    image:
      // "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "/UTbmanager.png",
    github: "https://github.com/Chadokar/ytbmage",
    live: "https://ytmage.onrender.com/",
    tags: [
      "React",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Knex",
      "Youtube API",
    ],
  },
];

function Projects(): React.ReactElement {
  return (
    <div className="space-y-8">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        whileHover={{ scale: 1.05 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            // initial={{ opacity: 0, y: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
