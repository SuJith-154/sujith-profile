import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "AI/ML",
    color: "primary",
    skills: [
      { name: "Python", level: 90 },
      { name: "OpenAI API", level: 85 },
      { name: "AgentSDK", level: 80 },
      { name: "PyAnnotate", level: 75 },
      { name: "FastAPI", level: 85 },
    ],
  },
  {
    title: "Backend",
    color: "secondary",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Neo4j", level: 70 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Frontend",
    color: "accent",
    skills: [
      { name: "React", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    title: "Cloud & Tools",
    color: "primary",
    skills: [
      { name: "AWS", level: 75 },
      { name: "Azure", level: 70 },
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 75 },
    ],
  },
];

const SkillBar = ({ 
  name, 
  level, 
  delay,
  color 
}: { 
  name: string; 
  level: number; 
  delay: number;
  color: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const colorClasses: Record<string, string> = {
    primary: "from-teal to-teal-glow",
    secondary: "from-purple to-purple-deep",
    accent: "from-orange to-orange-warm",
  };

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className={`skill-bar-fill bg-gradient-to-r ${colorClasses[color] || colorClasses.primary}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Core <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I use to build intelligent, scalable solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="glass rounded-2xl p-8 hover-lift"
            >
              <h3 className={`text-xl font-semibold mb-6 text-${category.color}`}>
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={categoryIndex * 0.15 + skillIndex * 0.1}
                  color={category.color}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Python", "JavaScript", "Java", "C", "SQL", "HTML/CSS"].map((lang, index) => (
              <motion.span
                key={lang}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 glass rounded-xl font-mono text-sm hover:glow-teal transition-all duration-300 cursor-default"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;