import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20gratuita%20do%20ERP%20White-Label";

const plans = [
  {
    name: "Essencial",
    subtitle: "Para empresas que precisam começar rápido",
    price: "R$ 3.500",
    featured: false,
    features: [
      "Implementação do ERP open source",
      "Setup em Servidor Cloud",
      "Configuração de 2 módulos principais",
      "Treinamento Online de 1h30",
    ],
    cta: "Escolher Plano",
  },
  {
    name: "Profissional",
    subtitle: "Implementação completa com consultoria estratégica",
    price: "R$ 6.500",
    featured: true,
    features: [
      "Tudo do plano Essencial",
      "Mapeamento de Processos + Migração de dados",
      "Até 4 módulos configurados e customizados",
      "4 sessões de Treinamento (1 por semana)",
    ],
    cta: "Escolher Plano",
  },
  {
    name: "Infinity",
    subtitle: "Para projetos complexos e customizados",
    price: "Sob Medida",
    featured: false,
    features: [
      "Tudo do plano Profissional",
      "Integrações customizadas via API",
      "Desenvolvimentos e customizações de código",
      "Suporte dedicado e consultoria estratégica",
    ],
    cta: "Solicitar Orçamento",
  },
];

const ease = [0.16, 1, 0.3, 1];

const PricingSection = () => (
  <section className="section-spacing" id="pricing">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
          Planos de Implementação
        </h2>
        <p className="text-muted-foreground">
          Escolha o plano ideal para sua empresa •{" "}
          <span className="font-semibold text-foreground">Pagamento Único</span>
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: i * 0.1 }}
            className={`relative rounded-2xl border p-8 transition-all ${
              plan.featured
                ? "border-primary bg-card card-shadow-hover scale-[1.02]"
                : "border-border bg-card card-shadow hover:card-shadow-hover"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-lg bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                MAIS VENDIDO
              </span>
            )}
            <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
            <p className="text-sm text-muted-foreground mb-6">{plan.subtitle}</p>
            <p className="font-mono-data text-3xl font-bold text-foreground mb-1">{plan.price}</p>
            <p className="text-xs text-muted-foreground mb-6">Pagamento Único</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="h-4 w-4 text-highlight mt-0.5 shrink-0" strokeWidth={2} />
                  {f}
                </li>
              ))}
            </ul>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ y: 1 }}
              className={`flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all ${
                plan.featured
                  ? "bg-primary text-primary-foreground btn-inset hover:brightness-110"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <MessageCircle className="h-4 w-4" />
              {plan.cta}
            </motion.a>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto"
      >
        Todos os planos incluem uma mensalidade de{" "}
        <span className="font-semibold text-foreground">Hospedagem Cloud + Suporte Técnico</span>{" "}
        a partir de R$ 250,00/mês (opcional, mas recomendado).
      </motion.p>
    </div>
  </section>
);

export default PricingSection;
