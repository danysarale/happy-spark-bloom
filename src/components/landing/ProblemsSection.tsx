import { motion } from "framer-motion";
import { Lock, DollarSign, Link2 } from "lucide-react";

const problems = [
  {
    icon: Lock,
    title: "Código Fechado e Proprietário",
    desc: "Você não controla o código. Preso a um fornecedor, sem liberdade para customizar ou integrar conforme sua necessidade.",
  },
  {
    icon: DollarSign,
    title: "Custos Proibitivos por Usuário",
    desc: "Cada novo funcionário aumenta sua conta. Licenças caras, sem transparência, e você não pode negociar.",
  },
  {
    icon: Link2,
    title: "Amarrado a Integrações Caras",
    desc: "Conectar com outros sistemas custa uma fortuna. Você fica refém de APIs limitadas e suporte lento.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const ProblemsSection = () => (
  <section className="section-spacing bg-surface">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
          Por que a maioria dos ERPs tradicionais te prende?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Descubra os problemas de sistemas tradicionais que cobram caro por cada usuário
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 card-shadow transition-shadow hover:card-shadow-hover group"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
              <p.icon className="h-5 w-5 text-destructive" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
