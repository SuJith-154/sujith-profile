import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Brain, Code2, Rocket, GraduationCap } from "lucide-react";

const stats = [
  { label: "LeetCode Problems", value: 240, suffix: "+" },
  { label: "CGPA", value: 8.05, suffix: "", decimals: 2 },
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Tech Stack", value: 15, suffix: "+" },
];

const AnimatedCounter = ({ 
  target, 
  suffix = "", 
  decimals = 0 
}: { 
  target: number; 
  suffix?: string; 
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
};

const highlights = [
  {
    icon: Brain,
    title: "AI/LLM Expertise",
    description: "GPT-4, AgentSDK, OpenAI API integration for enterprise solutions",
    color: "primary",
  },
  {
    icon: Rocket,
    title: "Enterprise Experience",
    description: "Building production-ready AI systems at Prayag.ai",
    color: "secondary",
  },
  {
    icon: Code2,
    title: "Full-Stack Skills",
    description: "MERN stack, FastAPI, cloud services for complete solutions",
    color: "accent",
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "B.E. Computer Science & Design, Karpagam College (2026)",
    color: "primary",
  },
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about building intelligent systems that solve real-world problems
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover-lift"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter 
                  target={stat.value} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals || 0}
                />
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="glass rounded-2xl p-8 hover-lift group"
            >
              <div className={`w-14 h-14 rounded-xl bg-${item.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-7 h-7 text-${item.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;