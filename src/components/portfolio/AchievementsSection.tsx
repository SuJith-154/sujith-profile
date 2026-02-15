import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award, Users, Calendar } from "lucide-react";

const achievements = [
  {
    icon: Medal,
    title: "UI Design Competition",
    description: "2nd Prize among 50+ competitors",
    badge: "🥈",
    color: "secondary",
  },
  {
    icon: Trophy,
    title: "LeetCode Champion",
    description: "240+ problems solved",
    badge: "🏆",
    color: "primary",
  },
  {
    icon: Users,
    title: "Hackathon Leader",
    description: "Led 5-member team for environmental sustainability project",
    badge: "🎖️",
    color: "accent",
  },
];

const certifications = [
  { name: "Java", issuer: "Netstack", date: "Oct 2024" },
  { name: "JavaScript", issuer: "IIT Bombay", date: "Mar 2024" },
  { name: "Python", issuer: "GUVI", date: "Oct 2023" },
  { name: "Intro to AI", issuer: "Novitech", date: "Jul 2023" },
];

const AchievementsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition and continuous learning in the tech industry
          </p>
        </motion.div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass rounded-2xl p-8 text-center hover-lift group"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                className="text-5xl mb-4"
              >
                {achievement.badge}
              </motion.div>
              <h3 className={`text-xl font-semibold mb-2 text-${achievement.color}`}>
                {achievement.title}
              </h3>
              <p className="text-muted-foreground">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <Award className="text-primary" />
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors group cursor-default"
              >
                <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {cert.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar size={12} />
                  {cert.date}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;