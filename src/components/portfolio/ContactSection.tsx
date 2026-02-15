import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Copy, Check, ArrowUp, Sparkles } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Header */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-primary" size={24} />
            <span className="text-primary font-mono text-sm">Let's Connect</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something
            <br />
            <span className="gradient-text">AI-Powered?</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            I'm always excited to discuss new projects, creative ideas, or opportunities 
            to be part of your vision.
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => copyToClipboard("sujipjk03@gmail.com", "email")}
              className="glass rounded-2xl p-6 hover-lift cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:glow-teal transition-all">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-mono text-sm md:text-base">sujipjk03@gmail.com</p>
                  </div>
                </div>
                <motion.div
                  animate={{ scale: copiedEmail ? 1.2 : 1 }}
                  className={copiedEmail ? "text-green-500" : "text-muted-foreground"}
                >
                  {copiedEmail ? <Check size={20} /> : <Copy size={20} />}
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => copyToClipboard("+91 6369817127", "phone")}
              className="glass rounded-2xl p-6 hover-lift cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:glow-purple transition-all">
                    <Phone className="text-secondary" size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="font-mono text-sm md:text-base">+91 6369817127</p>
                  </div>
                </div>
                <motion.div
                  animate={{ scale: copiedPhone ? 1.2 : 1 }}
                  className={copiedPhone ? "text-green-500" : "text-muted-foreground"}
                >
                  {copiedPhone ? <Check size={20} /> : <Copy size={20} />}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.a
            href="mailto:sujipjk03@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal via-purple to-orange text-primary-foreground rounded-xl font-semibold text-lg animate-gradient hover-lift"
          >
            <Sparkles size={20} />
            Send Me a Message
          </motion.a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-24 pt-8 border-t border-border/30"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © develop with Sujith S. Built with passion and a touch of AI magic.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass rounded-xl text-muted-foreground hover:text-primary hover:glow-teal transition-all"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default ContactSection;