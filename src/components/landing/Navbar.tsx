import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20gratuita%20do%20ERP%20White-Label";

const Navbar = () => (
  <motion.nav
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg"
  >
    <div className="container-narrow flex h-14 items-center justify-between">
      <span className="text-base font-bold text-foreground tracking-tight">ERP Cloud</span>
      <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#pricing" className="hover:text-foreground transition-colors">Planos</a>
      </div>
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ y: 1 }}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground btn-inset hover:brightness-110 transition-all"
      >
        <MessageCircle className="h-3.5 w-3.5" />
        Falar com Consultor
      </motion.a>
    </div>
  </motion.nav>
);

export default Navbar;
