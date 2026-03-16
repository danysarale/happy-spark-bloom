import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5562996759233?text=Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20gratuita%20do%20ERP%20White-Label";
const ease = [0.16, 1, 0.3, 1] as const;

const CtaSection = () => (
  <section className="section-spacing">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="rounded-2xl border border-primary/20 bg-card p-12 md:p-16 text-center card-shadow"
      >
        <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
          Agende sua Demonstração Gratuita
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-3">
          Veja na prática como eliminar custos absurdos por usuário
        </p>
        <p className="text-sm font-semibold text-foreground mb-8">
          💳 Pagamento Único — Sem Surpresas
        </p>
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ y: 1 }}
          className="inline-flex items-center gap-2.5 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground btn-inset transition-all hover:brightness-110"
        >
          <MessageCircle className="h-4 w-4" />
          Agendar Demonstração Agora
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
