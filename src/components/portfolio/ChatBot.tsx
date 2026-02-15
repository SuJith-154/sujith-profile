import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const portfolioKnowledge = {
  name: "Sujith S",
  title: "AI Engineer | Full-Stack Developer",
  location: "Chennai, Tamil Nadu, India",
  email: "sujipjk03@gmail.com",
  phone: "+91 6369817127",
  education: "B.E. in Computer Science & Design, Karpagam College of Engineering (2026)",
  cgpa: "8.05",
  
  skills: {
    aiml: ["Python", "FastAPI", "OpenAI API", "AgentSDK", "PyAnnotate"],
    backend: ["FastAPI", "MongoDB", "Neo4j", "Node.js"],
    frontend: ["React", "HTML", "CSS", "JavaScript"],
    cloud: ["AWS", "Azure Services"],
    languages: ["Java", "C", "Python", "HTML", "SQL", "JavaScript"]
  },
  
  experience: [
    {
      role: "AI Engineer Intern",
      company: "Prayag.ai",
      period: "Jun 2025 - Present",
      highlights: ["Agent systems development", "Chatbot systems with function calling", "MCP servers in FastAPI", "Audio processing pipelines"]
    }
  ],
  
  projects: [
    { name: "Nanban Fund", desc: "Chit fund management platform with role-based access control", tech: "Node.js, MongoDB, React" },
    { name: "Speaker Diarization System", desc: "Audio processing pipeline for enterprise", tech: "Python, PyAnnotate, AWS Transcribe" },
    { name: "Short-Film Platform", desc: "Filmmaker & production house connection platform", tech: "MERN Stack" },
    { name: "Salary Prediction", desc: "Data-driven ML model for salary prediction", tech: "Python, Scikit-learn" },
    { name: "Greenly", desc: "Carbon emissions calculator for sustainability", tech: "HTML, CSS, JavaScript" }
  ],
  
  achievements: [
    "240+ LeetCode problems solved",
    "2nd Prize in UI Design Competition (50+ competitors)",
    "Led 5-member hackathon team for environmental sustainability project"
  ],
  
  certifications: ["Java (Netstack)", "JavaScript (IIT Bombay)", "Python (GUVI)", "Intro to AI (Novitech)"]
};

const findResponse = (query: string): string => {
  const q = query.toLowerCase();
  
  // Greetings
  if (q.match(/^(hi|hello|hey|howdy|greetings)/)) {
    return `Hello! 👋 I'm Sujith's portfolio assistant. I can tell you about his skills, experience, projects, and achievements. What would you like to know?`;
  }
  
  // Name/Who
  if (q.match(/who (is|are)|your name|about (you|sujith)|tell me about/)) {
    return `${portfolioKnowledge.name} is an ${portfolioKnowledge.title} based in ${portfolioKnowledge.location}. He's currently pursuing ${portfolioKnowledge.education} with a CGPA of ${portfolioKnowledge.cgpa}. He specializes in building enterprise-grade AI solutions with LLM orchestration and agent systems.`;
  }
  
  // Contact
  if (q.match(/contact|email|phone|reach|hire|connect/)) {
    return `You can reach Sujith at:\n📧 Email: ${portfolioKnowledge.email}\n📱 Phone: ${portfolioKnowledge.phone}\n\nHe's always open to discussing AI projects and collaboration opportunities!`;
  }
  
  // Location
  if (q.match(/where|location|based|live|from/)) {
    return `Sujith is based in ${portfolioKnowledge.location} 🇮🇳. He's currently working remotely as an AI Engineer Intern at Prayag.ai.`;
  }
  
  // Education
  if (q.match(/education|study|college|university|degree|cgpa|gpa/)) {
    return `Sujith is pursuing a ${portfolioKnowledge.education}. He maintains a strong CGPA of ${portfolioKnowledge.cgpa}, demonstrating his academic excellence alongside practical industry experience.`;
  }
  
  // Current work/experience
  if (q.match(/work|job|experience|current|prayag|intern|doing now/)) {
    const exp = portfolioKnowledge.experience[0];
    return `Currently, Sujith works as an ${exp.role} at ${exp.company} (${exp.period}). His responsibilities include:\n• ${exp.highlights.join("\n• ")}\n\nHe's building cutting-edge AI solutions for enterprise applications!`;
  }
  
  // AI/ML skills
  if (q.match(/ai|ml|machine learning|llm|agent|openai|gpt/)) {
    return `Sujith specializes in AI/ML with expertise in:\n• ${portfolioKnowledge.skills.aiml.join(", ")}\n\nHe builds enterprise AI solutions including LLM orchestration, agent systems, chatbots with function calling, and audio processing pipelines at Prayag.ai.`;
  }
  
  // Skills general
  if (q.match(/skill|tech|stack|know|expertise|proficient/)) {
    return `Sujith's technical expertise spans:\n\n🤖 AI/ML: ${portfolioKnowledge.skills.aiml.join(", ")}\n⚙️ Backend: ${portfolioKnowledge.skills.backend.join(", ")}\n🎨 Frontend: ${portfolioKnowledge.skills.frontend.join(", ")}\n☁️ Cloud: ${portfolioKnowledge.skills.cloud.join(", ")}\n\nHe's a true full-stack developer with AI specialization!`;
  }
  
  // Projects
  if (q.match(/project|built|create|portfolio|work on|developed/)) {
    const projectList = portfolioKnowledge.projects
      .map(p => `• **${p.name}**: ${p.desc} (${p.tech})`)
      .join("\n");
    return `Sujith has worked on several impressive projects:\n\n${projectList}\n\nWant to know more about any specific project?`;
  }
  
  // Specific projects
  if (q.match(/nanban|fund|chit/)) {
    return `**Nanban Fund** is a comprehensive chit fund management platform featuring role-based access control for secure financial operations. Built with Node.js, MongoDB, and React, it showcases Sujith's full-stack capabilities in fintech applications.`;
  }
  
  if (q.match(/speaker|diarization|audio/)) {
    return `The **Speaker Diarization System** is an audio processing pipeline built for enterprise use. Using Python, PyAnnotate, and AWS Transcribe, it demonstrates Sujith's expertise in AI-powered audio analysis and cloud integration.`;
  }
  
  // Achievements
  if (q.match(/achieve|award|accomplish|leetcode|competition|hackathon/)) {
    return `Sujith's notable achievements include:\n\n🏆 ${portfolioKnowledge.achievements.join("\n🏆 ")}\n\nHe's also certified in ${portfolioKnowledge.certifications.join(", ")} from recognized institutions!`;
  }
  
  // Certifications
  if (q.match(/certif|course|learn/)) {
    return `Sujith holds certifications in:\n• ${portfolioKnowledge.certifications.join("\n• ")}\n\nThese certifications from institutions like IIT Bombay and GUVI demonstrate his commitment to continuous learning.`;
  }
  
  // Languages
  if (q.match(/language|programming|code in/)) {
    return `Sujith is proficient in multiple programming languages:\n${portfolioKnowledge.skills.languages.join(", ")}\n\nHis primary focus is Python for AI/ML and JavaScript/TypeScript for full-stack development.`;
  }
  
  // Backend
  if (q.match(/backend|server|api|database|mongo|neo4j/)) {
    return `For backend development, Sujith works with:\n• ${portfolioKnowledge.skills.backend.join("\n• ")}\n\nHe builds scalable APIs, manages databases, and creates robust server-side solutions.`;
  }
  
  // Frontend
  if (q.match(/frontend|ui|react|web|design/)) {
    return `On the frontend, Sujith works with:\n• ${portfolioKnowledge.skills.frontend.join("\n• ")}\n\nHe creates responsive, modern user interfaces with smooth animations and great user experience.`;
  }
  
  // Cloud
  if (q.match(/cloud|aws|azure|deploy/)) {
    return `Sujith has experience with cloud platforms:\n• ${portfolioKnowledge.skills.cloud.join("\n• ")}\n\nHe uses cloud services for deployment, audio processing (AWS Transcribe), and building scalable applications.`;
  }
  
  // Hire/availability
  if (q.match(/hire|available|freelance|opportunity|open to/)) {
    return `Sujith is always open to exciting opportunities in AI/ML and full-stack development! Currently interning at Prayag.ai, he's building expertise in enterprise AI solutions.\n\n📧 Reach out: ${portfolioKnowledge.email}\n\nLet's discuss how he can contribute to your team!`;
  }
  
  // Help
  if (q.match(/help|can you|what can/)) {
    return `I can help you learn about Sujith! Try asking:\n• "What are his skills?"\n• "Tell me about his projects"\n• "What's his work experience?"\n• "How can I contact him?"\n• "What are his achievements?"\n• "What AI technologies does he use?"`;
  }
  
  // Default
  return `I'm not sure about that specific question, but I can tell you about Sujith's skills, projects, experience, achievements, or how to contact him. What would you like to know?`;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! 👋 I'm Sujith's AI assistant. Ask me anything about his skills, projects, or experience!"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = findResponse(userMessage.content);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 500 + Math.random() * 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-primary rounded-full shadow-lg glow-teal hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} className="text-primary-foreground" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} className="text-primary-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] glass rounded-2xl shadow-2xl border border-border/50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-border/50 bg-card/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-xl">
                  <Bot size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Portfolio Assistant</h3>
                  <p className="text-xs text-muted-foreground">Ask me about Sujith</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`p-2 rounded-xl shrink-0 ${
                    message.role === "user" 
                      ? "bg-primary/20" 
                      : "bg-secondary/20"
                  }`}>
                    {message.role === "user" ? (
                      <User size={16} className="text-primary" />
                    ) : (
                      <Bot size={16} className="text-secondary" />
                    )}
                  </div>
                  <div className={`px-4 py-2 rounded-2xl max-w-[80%] ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-sm"
                      : "bg-card border border-border/50 text-foreground rounded-tl-sm"
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="p-2 rounded-xl bg-secondary/20">
                    <Bot size={16} className="text-secondary" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-card border border-border/50 rounded-tl-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/50 bg-card/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 px-4 py-2 bg-background/50 border border-border/50 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <motion.button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-primary rounded-xl text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
