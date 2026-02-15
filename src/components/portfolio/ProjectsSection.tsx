import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Cpu, Database, Globe, LineChart, Leaf } from "lucide-react";

const projects = [
  {
    title: "NANBAN FUND",
    description: "Enterprise chit fund management platform with role-based access control and secure transaction handling.",
    tech: ["Node.js", "MongoDB", "React", "JavaScript"],
    icon: Database,
    color: "primary",
    links: { github: "#", demo: "#" },
    featured: true,
  },
  {
    title: "Speaker Diarization System",
    description: "Real-time audio processing pipeline for enterprise applications with AWS Transcribe integration.",
    tech: ["Python", "PyAnnotate", "AWS Transcribe", "FastAPI"],
    icon: Cpu,
    color: "secondary",
    links: { github: "#" },
    featured: true,
  },
  {
    title: "Short-Film Platform",
    description: "Platform connecting filmmakers and production houses, enabling collaboration and project management.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    icon: Globe,
    color: "accent",
    links: { github: "#", demo: "#" },
    featured: false,
  },
  {
    title: "Salary Prediction ML",
    description: "Data-driven machine learning model for accurate salary predictions based on multiple features.",
    tech: ["Python", "Scikit-learn", "NumPy", "Pandas"],
    icon: LineChart,
    color: "primary",
    links: { github: "#" },
    featured: false,
  },
  {
    title: "GREENLY",
    description: "Environmental sustainability app with carbon emissions calculator to promote eco-friendly decisions.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: Leaf,
    color: "secondary",
    links: { github: "#", demo: "#" },
    featured: false,
  },
];

const ProjectCard = ({ 
  project, 
  index,
  isInView 
}: { 
  project: typeof projects[0]; 
  index: number;
  isInView: boolean;
}) => {
  const colorClasses: Record<string, { bg: string; text: string; glow: string }> = {
    primary: { bg: "bg-primary/10", text: "text-primary", glow: "group-hover:glow-teal" },
    secondary: { bg: "bg-secondary/10", text: "text-secondary", glow: "group-hover:glow-purple" },
    accent: { bg: "bg-accent/10", text: "text-accent", glow: "group-hover:glow-orange" },
  };

  const colors = colorClasses[project.color] || colorClasses.primary;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`glass rounded-2xl p-6 hover-lift group relative overflow-hidden ${
        project.featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
            Featured
          </span>
        </div>
      )}

      <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-6 transition-all duration-300 ${colors.glow}`}>
        <project.icon className={`w-7 h-7 ${colors.text}`} />
      </div>

      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <motion.span
            key={tech}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-3 py-1 text-xs font-mono bg-muted rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors cursor-default"
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {project.links.github && (
          <motion.a
            href={project.links.github}
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </motion.a>
        )}
        {project.links.demo && (
          <motion.a
            href={project.links.demo}
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={20} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in AI, full-stack development, and cloud technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;