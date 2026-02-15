import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "AI Engineer Intern",
    company: "Prayag.ai",
    location: "Remote",
    period: "Jun 2025 - Present",
    current: true,
    responsibilities: [
      "Developing agent systems using AgentSDK and OpenAI API",
      "Building chatbot systems with advanced function calling",
      "Creating MCP servers in FastAPI for enterprise clients",
      "Implementing audio processing pipelines with speaker diarization",
    ],
  },
  {
    title: "Internship",
    company: "Navabharathi Computers",
    location: "Chennai, India",
    period: "Sep 2023",
    current: false,
    responsibilities: [
      "Gained hands-on experience with computer systems and networking",
      "Assisted in software troubleshooting and client support",
      "Learned about enterprise IT infrastructure management",
    ],
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey in building AI-powered solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 
                  ? "md:pr-12 md:text-right md:ml-0" 
                  : "md:pl-12 md:ml-auto"
              } pl-8 md:pl-0`}
            >
              {/* Timeline Dot */}
              <div className={`absolute top-2 w-4 h-4 rounded-full ${
                exp.current ? "bg-primary glow-teal animate-pulse-glow" : "bg-secondary"
              } ${
                index % 2 === 0 
                  ? "left-0 md:left-auto md:-right-2 md:translate-x-1/2" 
                  : "left-0 md:-left-2 md:-translate-x-1/2"
              } -translate-x-1/2 md:translate-x-0`} />

              {/* Content Card */}
              <div className="glass rounded-2xl p-6 hover-lift group">
                {exp.current && (
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-4">
                    Current Role
                  </span>
                )}
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                
                <p className="text-lg text-secondary font-medium mb-3">
                  {exp.company}
                </p>

                <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${
                  index % 2 === 0 ? "md:justify-end" : ""
                }`}>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className={`text-primary mt-1.5 ${index % 2 === 0 ? "md:order-2" : ""}`}>
                        •
                      </span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;