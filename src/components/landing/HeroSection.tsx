import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-dashboard.jpg";

const WHATSAPP_URL = "https://wa.me/5562996759233?text=Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20gratuita%20do%20ERP%20White-Label";

const ease = [0.16, 1, 0.3, 1] as const;

const HeroSection = () => (
  <section className="section-spacing pt-16 md:pt-24">
    <div className="container-narrow">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            ERP Open Source
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.5rem] text-foreground mb-6">
            Seu ERP de ponta, sem custos absurdos por&nbsp;usuário.
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-lg mb-4">
            Sistema de gestão que{" "}
            <span className="text-foreground font-semibold">você não paga aluguel por usuário</span>{" "}
            — é seu, você controla{" "}
            <span className="text-primary font-semibold">(open source)</span>.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground max-w-lg mb-8">
            Consultoria especializada em implementação de um sistema de gestão robusto, 
            escalável e totalmente customizável. Nós cuidamos da infraestrutura, segurança 
            e implantação para você focar no que importa: crescer sem limites.
          </p>
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground btn-inset transition-all hover:brightness-110"
            whileTap={{ y: 1 }}
          >
            <MessageCircle className="h-4 w-4" />
            Falar com um Consultor no WhatsApp
          </motion.a>

          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="font-mono-data text-2xl font-bold text-foreground">30+</p>
              <p className="text-xs text-muted-foreground mt-0.5">Países</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-mono-data text-2xl font-bold text-foreground">8</p>
              <p className="text-xs text-muted-foreground mt-0.5">Anos de Tradição</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-mono-data text-2xl font-bold text-foreground">99.9%</p>
              <p className="text-xs text-muted-foreground mt-0.5">Uptime</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden card-shadow border border-border">
            <img
              src={heroImg}
              alt="Dashboard do ERP mostrando métricas financeiras e gráficos de desempenho"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
